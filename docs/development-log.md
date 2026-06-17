# Development Log

Bu dosya commit sirasinda staged degisikliklere gore otomatik guncellenir.

<!-- AUTOLOG:START -->

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
