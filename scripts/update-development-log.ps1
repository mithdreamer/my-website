[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

function Invoke-Git {
    param(
        [Parameter(Mandatory = $true)]
        [string[]] $GitArgs
    )

    $output = & git @GitArgs

    if ($LASTEXITCODE -ne 0) {
        throw "Git command failed: git $($GitArgs -join ' ')"
    }

    return $output
}

function Format-Path {
    param(
        [Parameter(Mandatory = $true)]
        [string] $Path
    )

    return "``$Path``"
}

function Format-Change {
    param(
        [Parameter(Mandatory = $true)]
        [string] $Line,

        [Parameter(Mandatory = $true)]
        [string] $LogPath
    )

    $parts = $Line -split "`t"

    if ($parts.Count -lt 2) {
        return $null
    }

    $status = $parts[0]
    $path = $parts[1]

    if ($path -eq $LogPath) {
        return $null
    }

    if (($status -like 'R*') -and ($parts.Count -ge 3)) {
        $newPath = $parts[2]

        if (($path -eq $LogPath) -or ($newPath -eq $LogPath)) {
            return $null
        }

        return "- Yeniden adlandirildi: $(Format-Path $path) -> $(Format-Path $newPath)"
    }

    if (($status -like 'C*') -and ($parts.Count -ge 3)) {
        $newPath = $parts[2]

        if (($path -eq $LogPath) -or ($newPath -eq $LogPath)) {
            return $null
        }

        return "- Kopyalandi: $(Format-Path $path) -> $(Format-Path $newPath)"
    }

    switch -Regex ($status) {
        '^A' { return "- Eklendi: $(Format-Path $path)" }
        '^M' { return "- Guncellendi: $(Format-Path $path)" }
        '^D' { return "- Silindi: $(Format-Path $path)" }
        '^T' { return "- Dosya tipi degisti: $(Format-Path $path)" }
        default { return "- Degisti: $(Format-Path $path)" }
    }
}

$repoRoot = (Invoke-Git -GitArgs @('rev-parse', '--show-toplevel') | Select-Object -First 1).Trim()
Set-Location -LiteralPath $repoRoot

$relativeLogPath = 'docs/development-log.md'
$logPath = Join-Path $repoRoot $relativeLogPath
$marker = '<!-- AUTOLOG:START -->'
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)

$stagedChanges = @(Invoke-Git -GitArgs @('diff', '--cached', '--name-status', '--diff-filter=ACMDRTUXB'))
$changeLines = @(
    foreach ($line in $stagedChanges) {
        if ([string]::IsNullOrWhiteSpace($line)) {
            continue
        }

        Format-Change -Line $line -LogPath $relativeLogPath
    }
) | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }

if ($changeLines.Count -eq 0) {
    exit 0
}

$fingerprintSource = ($stagedChanges | Where-Object { $_ -notmatch [regex]::Escape($relativeLogPath) }) -join "`n"
$fingerprintBytes = $utf8NoBom.GetBytes($fingerprintSource)
$sha256 = [System.Security.Cryptography.SHA256]::Create()
$fingerprintHash = $sha256.ComputeHash($fingerprintBytes)
$sha256.Dispose()
$fingerprint = ([System.BitConverter]::ToString($fingerprintHash) -replace '-', '').Substring(0, 12).ToLowerInvariant()
$fingerprintMarker = "<!-- AUTOLOG:$fingerprint -->"

if (Test-Path -LiteralPath $logPath) {
    $currentContent = [System.IO.File]::ReadAllText($logPath, $utf8NoBom)
} else {
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $logPath) | Out-Null
    $currentContent = ''
}

$normalizedContent = $currentContent -replace "`r`n", "`n"

if ($normalizedContent.Contains($fingerprintMarker)) {
    Invoke-Git -GitArgs @('add', '--', $relativeLogPath) | Out-Null
    exit 0
}

if ([string]::IsNullOrWhiteSpace($normalizedContent)) {
    $normalizedContent = @(
        '# Development Log'
        ''
        'Bu dosya commit sirasinda staged degisikliklere gore otomatik guncellenir.'
        ''
        $marker
        ''
    ) -join "`n"
} elseif (-not $normalizedContent.Contains($marker)) {
    if ($normalizedContent -match '^\s*# Development Log\s*\n') {
        $normalizedContent = $normalizedContent -replace '^\s*# Development Log\s*\n+', "# Development Log`n`nBu dosya commit sirasinda staged degisikliklere gore otomatik guncellenir.`n`n$marker`n`n"
    } else {
        $normalizedContent = (@(
            '# Development Log'
            ''
            'Bu dosya commit sirasinda staged degisikliklere gore otomatik guncellenir.'
            ''
            $marker
            ''
        ) -join "`n") + $normalizedContent.TrimStart()
    }
}

$headCommit = (& git rev-parse --short HEAD 2>$null)

if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($headCommit)) {
    $scope = 'ilk commit hazirligi'
} else {
    $scope = "$headCommit sonrasi"
}

$branch = (& git branch --show-current 2>$null)

if ($LASTEXITCODE -ne 0) {
    $branch = ''
}

$entry = New-Object System.Collections.Generic.List[string]
$entry.Add($fingerprintMarker)
$entry.Add("## $(Get-Date -Format 'yyyy-MM-dd HH:mm') - $scope")

if (-not [string]::IsNullOrWhiteSpace($branch)) {
    $entry.Add("- Branch: ``$($branch.Trim())``")
}

foreach ($changeLine in $changeLines) {
    $entry.Add($changeLine)
}

$entry.Add('')
$entryText = ($entry -join "`n") + "`n"
$markerIndex = $normalizedContent.IndexOf($marker)
$prefix = $normalizedContent.Substring(0, $markerIndex + $marker.Length)
$suffix = $normalizedContent.Substring($markerIndex + $marker.Length).TrimStart([char[]] @("`r", "`n"))
$newContent = "$prefix`n`n$entryText$suffix"

if (-not $newContent.EndsWith("`n")) {
    $newContent += "`n"
}

[System.IO.File]::WriteAllText($logPath, $newContent, $utf8NoBom)
Invoke-Git -GitArgs @('add', '--', $relativeLogPath) | Out-Null
