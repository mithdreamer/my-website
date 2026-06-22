# Development Log

Bu dosya commit sirasinda staged degisikliklere gore otomatik guncellenir.

<!-- AUTOLOG:START -->

<!-- AUTOLOG:ef985c415b4e -->
## 2026-06-22 22:43 - d449c39 sonrasi
- Branch: `main`
- Guncellendi: `css/home.css`
- Guncellendi: `index.html`
- Guncellendi: `js/dashboard.js`

<!-- AUTOLOG:1798fe2e1354 -->
## 2026-06-22 13:43 - fff09e6 sonrasi
- Branch: `main`
- Guncellendi: `js/dashboard.js`

<!-- AUTOLOG:96335f634e07 -->
## 2026-06-22 13:25 - b1b3ad1 sonrasi
- Branch: `main`
- Guncellendi: `index.html`
- Guncellendi: `js/dashboard.js`

<!-- AUTOLOG:ec21506766dd -->
## 2026-06-21 23:28 - ca72801 sonrasi
- Branch: `main`
- Guncellendi: `css/home.css`
- Guncellendi: `pages/about/index.html`
- Guncellendi: `pages/apps/index.html`

<!-- AUTOLOG:ace366e06959 -->
## 2026-06-21 21:57 - c8985af sonrasi
- Branch: `main`
- Guncellendi: `pages/3d/projeler/index.html`

<!-- AUTOLOG:95783adb6bbc -->
## 2026-06-21 21:51 - 0e6c887 sonrasi
- Branch: `main`
- Guncellendi: `components/navbar/navbar.js`
- Guncellendi: `index.html`

<!-- AUTOLOG:44adb16c1206 -->
## 2026-06-20 22:00 - bd966bb sonrasi
- Branch: `main`
- Guncellendi: `PROJECT_STATUS.md`
- Guncellendi: `css/home.css`
- Guncellendi: `index.html`

<!-- AUTOLOG:2e995452c1b8 -->
## 2026-06-19 20:55 - 6b07d95 sonrasi
- Branch: `main`
- Guncellendi: `PROJECT.md`
- Guncellendi: `css/home.css`
- Guncellendi: `index.html`
- Guncellendi: `js/dashboard.js`

<!-- AUTOLOG:cf4456f4a7c8 -->
## 2026-06-19 20:30 - c575225 sonrasi
- Branch: `main`
- Guncellendi: `css/home.css`
- Guncellendi: `index.html`
- Eklendi: `js/dashboard.js`

<!-- AUTOLOG:eae84a26d331 -->
## 2026-06-19 20:06 - 5744213 sonrasi
- Branch: `main`
- Guncellendi: `PROJECT_STATUS.md`
- Guncellendi: `index.html`

<!-- AUTOLOG:306b05c5399f -->
## 2026-06-19 08:45 - f198656 sonrasi
- Branch: `main`
- Guncellendi: `css/buttons.css`
- Guncellendi: `index.html`

<!-- AUTOLOG:ddb5f90d2946 -->
## 2026-06-18 17:24 - a8e5e21 sonrasi
- Branch: `main`
- Silindi: `assets/images/3d/infinite-cube.jpg`
- Eklendi: `assets/images/projects/3d/infinite-cube.jpg`
- Eklendi: `assets/images/projects/ai-news/ai-news-home.jpg`
- Eklendi: `assets/images/projects/order-portal/dashboard.jpg`
- Guncellendi: `components/cards/card.css`
- Guncellendi: `index.html`

<!-- AUTOLOG:5b8346d65a7f -->
## 2026-06-18 16:02 - 3b20a61 sonrasi
- Branch: `main`
- Eklendi: `PROJECT_STATUS.md`
- Guncellendi: `css/home.css`
- Eklendi: `docs/IDEAS.md`
- Guncellendi: `index.html`
- Guncellendi: `pages/3d/index.html`

<!-- AUTOLOG:8ddaec9c32f9 -->
## 2026-06-17 23:57 - 6a62053 sonrasi
- Branch: `main`
- Guncellendi: `css/animations.css`
- Guncellendi: `css/home.css`
- Guncellendi: `js/animations.js`

<!-- AUTOLOG:c357dec50035 -->
## 2026-06-17 17:35 - 3839a21 sonrasi
- Branch: `main`
- Guncellendi: `css/home.css`
- Guncellendi: `index.html`

<!-- AUTOLOG:94ebd0efdcf2 -->
## 2026-06-16 15:02 - 3bf264e sonrasi
- Branch: `main`
- Eklendi: `.githooks/pre-commit`
- Eklendi: `scripts/update-development-log.ps1`

## 2026-06-16

### Homepage

#### Added

* Hero bölümü yeniden düzenlendi.
* Son Projeler bölümü oluşturuldu.
* Hızlı Erişim bölümü eklendi.
* Button System ana sayfada kullanılmaya başlandı.
* Dashboard mimarisinin ilk temeli atıldı.

#### Improved

* Sayfa yapısı Hero → Son Projeler → Hızlı Erişim → Footer şeklinde yeniden organize edildi.
* Navbar ve Footer component yapısı korundu.

---

### 3D Projects

#### Added

* Project Search sistemi geliştirildi.
* Arama sonuç sayısı gösterimi eklendi.
* Clear (X) butonu eklendi.
* ESC tuşu ile arama temizleme desteği eklendi.

#### Improved

* Card Grid yapısı düzenlendi.
* Kart yerleşimleri iyileştirildi.
* Kart görsellerinin otomatik boyutlandırılması düzeltildi.

#### Fixed

* `.card-image img` yapısındaki görüntü boyutlandırma problemi giderildi.
* Grid yapısındaki hatalı kart yerleşimleri düzeltildi.

---

### Arduino

#### Improved

* Navbar yapısı component sistemine geçirildi.
* Footer yapısı component sistemine geçirildi.
* Sayfalar arası bağlantılar kontrol edildi ve düzeltildi.

---

### Developer Notes

#### Learned

* `querySelector()` ve `querySelectorAll()` kullanımı.
* CSS selector mantığı (`.class`, `#id`, `element`).
* Grid sistemlerinin çalışma mantığı.
* DevTools Sources sekmesi kullanımı.
* Breakpoint oluşturma.
* Step Over (F10) kullanımı.
* Scope penceresinde değişken inceleme.
* İlk gerçek debugging çalışması.

#### Next Goals

* Ana sayfadaki Son Projeler bölümünü gerçek projelerle doldurmak.
* Hızlı Erişim için özel kart (Quick Link Card) tasarlamak.
* Dashboard görünümünü geliştirmek.
* Arduino alt sayfalarının genel kontrolünü tamamlamak.
* DevTools ve debugging eğitimlerine devam etmek.

---

### Project Vision

#### Current Focus

* %80 Kişisel Web Sitesi
* %20 AI Haber Yayın Sistemi

#### Long Term Goal

3 ay içerisinde:

* Tek başına proje geliştirebilmek.
* Frontend geliştirmede rahat çalışabilmek.
* Backend mantığını anlayabilmek.
* Git ve GitHub kullanımına hakim olmak.
* DevTools ve debugging süreçlerini etkin kullanabilmek.

# Development Log

## 2026-06-18

### Added
- Homepage Quick Access section
- Quick Link Card v1
- PROJECT_STATUS.md

### Improved
- Homepage dashboard structure
- 3D project search system

### Learned
- DevTools breakpoint
- Scope
- CSS transform conflict
- Grid parent / child structure
