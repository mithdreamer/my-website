from pathlib import Path

# Ana klasörler
folders = [
    "pages/arduino",
    "css",
    "js",
    "data"
]

for folder in folders:
    Path(folder).mkdir(parents=True, exist_ok=True)


files = {
    "pages/arduino/index.html": """<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Arduino Projeleri</title>
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/arduino.css">
</head>
<body>

  <nav class="navbar">
    <a href="../../index.html">Ana Sayfa</a>
    <a href="index.html">Arduino</a>
    <a href="projeler.html">Projeler</a>
    <a href="egitimler.html">Eğitimler</a>
    <a href="komponentler.html">Komponentler</a>
  </nav>

  <main class="arduino-hero">
    <h1>Arduino Projeleri</h1>
    <p>Elektronik, kodlama ve üretim odaklı Arduino çalışmalarım.</p>

    <a class="arduino-button" href="projeler.html">Projeleri Gör</a>
  </main>

</body>
</html>
""",

    "pages/arduino/projeler.html": """<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Arduino Projeleri</title>
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/arduino.css">
</head>
<body>

  <nav class="navbar">
    <a href="../../index.html">Ana Sayfa</a>
    <a href="index.html">Arduino</a>
    <a href="projeler.html">Projeler</a>
    <a href="egitimler.html">Eğitimler</a>
    <a href="komponentler.html">Komponentler</a>
  </nav>

  <main class="arduino-page">
    <h1>Projeler</h1>

    <section id="arduino-project-list" class="arduino-grid">
      <!-- Projeler JS ile buraya gelecek -->
    </section>
  </main>

  <script src="../../js/arduino-projects.js"></script>
</body>
</html>
""",

    "pages/arduino/egitimler.html": """<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Arduino Eğitimleri</title>
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/arduino.css">
</head>
<body>

  <nav class="navbar">
    <a href="../../index.html">Ana Sayfa</a>
    <a href="index.html">Arduino</a>
    <a href="projeler.html">Projeler</a>
    <a href="egitimler.html">Eğitimler</a>
    <a href="komponentler.html">Komponentler</a>
  </nav>

  <main class="arduino-page">
    <h1>Arduino Eğitimleri</h1>

    <div class="arduino-card">
      <h2>Arduino Nedir?</h2>
      <p>Arduino, elektronik projeler geliştirmek için kullanılan programlanabilir bir karttır.</p>
    </div>

    <div class="arduino-card">
      <h2>pinMode() Nedir?</h2>
      <p>Bir pini giriş mi çıkış mı olarak kullanacağımızı belirler.</p>
    </div>
  </main>

</body>
</html>
""",

    "pages/arduino/komponentler.html": """<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Arduino Komponentleri</title>
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/arduino.css">
</head>
<body>

  <nav class="navbar">
    <a href="../../index.html">Ana Sayfa</a>
    <a href="index.html">Arduino</a>
    <a href="projeler.html">Projeler</a>
    <a href="egitimler.html">Eğitimler</a>
    <a href="komponentler.html">Komponentler</a>
  </nav>

  <main class="arduino-page">
    <h1>Komponentler</h1>

    <div class="arduino-grid">
      <div class="arduino-card">
        <h2>Arduino Uno</h2>
        <p>Başlangıç için en yaygın kullanılan Arduino kartlarından biridir.</p>
      </div>

      <div class="arduino-card">
        <h2>Breadboard</h2>
        <p>Lehim yapmadan devre kurmaya yarayan test tahtasıdır.</p>
      </div>

      <div class="arduino-card">
        <h2>LED</h2>
        <p>Elektrik verildiğinde ışık yayan temel elektronik parçadır.</p>
      </div>
    </div>
  </main>

</body>
</html>
""",

    "css/arduino.css": """.arduino-hero {
  min-height: 80vh;
  padding: 120px 24px;
  text-align: center;
}

.arduino-hero h1 {
  font-size: 56px;
  margin-bottom: 20px;
}

.arduino-hero p {
  font-size: 20px;
  margin-bottom: 32px;
}

.arduino-button {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  background-color: #00979d;
  color: white;
}

.arduino-page {
  padding: 120px 40px 60px;
}

.arduino-page h1 {
  margin-bottom: 32px;
}

.arduino-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.arduino-card {
  padding: 24px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.08);
}

.arduino-card h2 {
  margin-bottom: 12px;
}
""",

    "js/arduino-projects.js": """const projectList = document.querySelector("#arduino-project-list");

fetch("../../data/arduino-projects.json")
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("arduino-card");

      card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Seviye:</strong> ${project.level}</p>
        <p><strong>Malzemeler:</strong> ${project.components.join(", ")}</p>
      `;

      projectList.appendChild(card);
    });
  });
""",

    "data/arduino-projects.json": """[
  {
    "title": "LED Yakma Projesi",
    "description": "Arduino ile temel LED kontrolü.",
    "level": "Başlangıç",
    "components": ["Arduino Uno", "LED", "Direnç", "Jumper Kablo"]
  },
  {
    "title": "Buton ile LED Kontrolü",
    "description": "Butona basıldığında LED yakma uygulaması.",
    "level": "Başlangıç",
    "components": ["Arduino Uno", "Buton", "LED", "Direnç"]
  },
  {
    "title": "Servo Motor Kontrolü",
    "description": "Arduino ile servo motor açı kontrolü.",
    "level": "Orta",
    "components": ["Arduino Uno", "Servo Motor", "Jumper Kablo"]
  }
]
"""
}

for file_path, content in files.items():
    path = Path(file_path)

    if path.exists():
        print(f"Zaten var, dokunulmadı: {file_path}")
    else:
        path.write_text(content, encoding="utf-8")
        print(f"Oluşturuldu: {file_path}")

print("Arduino bölümü başarıyla oluşturuldu.")