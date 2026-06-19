# Proje Notlari

Bu dosya proje planini, aktif isleri, backlog maddelerini ve ogrenme notlarini takip etmek icin kullanilir.
Gerektikce elle guncellenebilir.

Son guncelleme: 2026-06-05

## Unutulmamasi Gerekenler

### Guncel Durum

- Ana sayfa, oyunlar, uygulamalar, 3D, gumruk, magaza, blog ve hakkimda sayfalari mevcut.
- Navbar artik ortak HTML/CSS/JS bileseni olarak yukleniyor.
- Footer artik ortak HTML/CSS/JS bileseni olarak yukleniyor.
- Mobil navbar icin hamburger ac/kapat davranisi var.
- Aktif sayfa linki navbar uzerinde otomatik vurgulaniyor.
- Gumruk alt sayfalari olusturuldu: mevzuat, faydali linkler, GTIP, hesaplama araclari, ithalat, ihracat.
- 3D alt sayfalari olusturuldu: modeller, yazicilar, baskilar, hizmetler, projeler.
- Store ana sayfasi ve alt klasor iskeletleri olusturuldu.

### Design System Durumu

- `variables.css` guncellendi.
- `buttons.css` olusturuldu.
- Button System temel varyantlari var: `btn`, `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-outline`, `btn-sm`, `btn-full`.
- `card.css` ortak kart yapisina cekildi.
- `heroes.css` ortak sayfa hero yapisi icin olusturuldu.
- `tables.css` olusturuldu ve `pages/gumruk/faydali-linkler/index.html` sayfasinda kullaniliyor.
- `utilities.css`, `layout.css`, `global.css` ve `animations.css` ortak yardimci katmanlar olarak kullaniliyor.
- Button System `pages/3d`, `pages/games`, `pages/gumruk` ve gumruk alt sayfalarinda kullanilmaya baslandi.
- Henuz tum kart butonlari `btn` sistemine tasinmadi.
- Form System henuz olusturulmadi.
- Ileride `pages/design-system/index.html` olusturulacak ve test alanlari bu sayfaya tasinacak.

### Son Gelistirmeler

- Footer System eklendi.
- Table System eklendi.
- Gumruk faydali linkler sayfasinda tablo ornegi kullanildi.
- Gumruk mevzuati sayfasina kategori kartlari eklendi.
- Navbar'a Magaza, Blog ve Hakkimda linkleri eklendi.
- Store, Blog ve Hakkimda sayfalari temel hero/icerik yapisiyla eklendi.
- 3D ve Gumruk bolumlerinin alt sayfa iskeletleri genisletildi.
- `pages/test.html` Button System test alani olarak kullaniliyor.

### Dikkat Edilecekler

- `card-button` sinifi hala ana sayfa, blog ve uygulamalar sayfalarinda geciyor.
- Navbar aktif link kontrolu su an birebir path eslesmesiyle calisiyor; alt sayfalarda ust kategori aktifligi daha sonra iyilestirilebilir.
- Gumruk faydali linkler sayfasinda TAREKS ve Tek Pencere baglantilari placeholder durumda.
- Store alt klasorleri simdilik iskelet seviyesinde.

### Modal Nedir?

- Modal, kullanicinin dikkatini belirli bir isleme veya bilgiye toplamak icin mevcut sayfanin uzerinde acilan pencere/panel yapisidir.
- Arka plandaki sayfa genelde karartilir veya gecici olarak etkilesime kapatilir; kullanici modal'i kapatana ya da gerekli islemi tamamlayana kadar odak modal uzerinde kalir.
- Ornek kullanimlar: giris/kayit formu, onay mesaji, detay goruntuleme, uyari veya kisa ayar ekranlari.

## Proje Yol Haritasi

### Mimari

- [x] Oyunlar
- [x] Uygulamalar
- [x] Gumruk
- [x] 3D
- [x] Magaza ana sayfasi
- [x] Blog
- [x] Hakkimda
- [x] Ortak Navbar
- [x] Ortak Footer

### Design System

- [x] Variables
- [x] Buttons
- [x] Cards
- [x] Heroes
- [x] Tables
- [ ] Forms
- [ ] `pages/design-system/index.html` olusturulacak ve test alanlari buraya tasinacak

### Siradakiler

- [x] Navbar System
- [x] Footer System
- [x] Table System
- [ ] `card-button` -> `btn btn-primary` donusumu
- [ ] Form System
- [ ] SEO
- [ ] Favicon
- [ ] Sitemap
- [ ] Robots.txt

### Sonra

- [ ] Login System
- [ ] Profil
- [ ] Favoriler
- [ ] Siparisler
- [ ] Admin Paneli

### En Son

- [ ] E-Ticaret
- [ ] 3D Urun Satisi
- [ ] Dijital Urun Satisi

## Simdi Yapilacaklar

Bunlar aktif gelistirme isleri:

- [ ] `card-button` -> `btn` donusumu
  - [ ] `index.html`
  - [ ] `pages/blog/index.html`
  - [ ] `pages/apps/index.html`
- [ ] Navbar son kontrolleri
  - [ ] Tum ana sayfalarda aktif link kontrolu
  - [ ] Alt sayfalarda ust kategori aktifligi
  - [ ] Mobil gorunum testi
- [ ] Gumruk faydali linkler sayfasi
  - [ ] TAREKS baglantisi eklenecek
  - [ ] Tek Pencere baglantisi eklenecek
  - [ ] Sayfa hero alani tamamlanacak
- [ ] Form System
  - [ ] Input
  - [ ] Select
  - [ ] Textarea
  - [ ] Checkbox / radio
  - [ ] Form hata ve yardim metinleri

## Yakinda Yapilacaklar

Bunlar projeyi buyutecek ozellikler:

- [ ] Design System sayfasi
  - [ ] Button testleri buraya tasinacak
  - [ ] Card ornekleri eklenecek
  - [ ] Table ornekleri eklenecek
  - [ ] Form ornekleri eklenecek
- [ ] Gumruk Mevzuati bolumu
  - [x] Mevzuat kategorileri
  - [ ] Mevzuat listeleme
  - [ ] Mevzuat arama
  - [ ] Kategori detay sayfalari
- [ ] Store bolumu
  - [ ] 3D urunler sayfasi
  - [ ] Dijital urunler sayfasi
  - [ ] Hizmetler sayfasi
  - [ ] Kampanyalar sayfasi

## Gelecekte Yapilacaklar

Daha buyuk isler:

- [ ] Modal sistemi
  - [ ] Ortak modal HTML/CSS/JS bileseni
  - [ ] Ac/kapat davranisi
  - [ ] Klavye ve odak kontrolu
- [ ] Uyelik sistemi
  - [ ] Kayit ol
  - [ ] Giris yap
  - [ ] Sifre sifirlama
  - [ ] Yetkilendirme
  - [ ] Kullanici profili

## Fikir Havuzu

Aklina gelen ama henuz planlamadigin seyler:

- [ ] Bildirim sistemi
- [ ] Favorilere ekleme
- [ ] Gelismis arama
- [ ] Admin paneli fikirleri
- [ ] Raporlama ekranlari
- [ ] Gumruk ile ilgili sayfa hazirlama
- [ ] 3D calismalarini internet sitesine ekleme

## Ogrenme Listesi

Unutmamak istedigin teknik konular:

### Ogrenilen Onemli Konular

- HTML -> Iskelet
- CSS -> Gorunum
- JS -> Davranis
- DOM -> Tarayicinin HTML'i agac olarak tutmasi
- DOM Manipulasyonu -> JS ile HTML'i degistirmek
- Event Listener -> Kullanici olaylarini dinlemek
- Component -> Tekrar kullanilabilir parcalar
- Modal -> Sayfanin ustunde acilan gecici pencere
- `===` -> Tip ve deger kontrolu

### En Cok Kullanilan Event Turleri

- `click`
- `dblclick`
- `mouseover`
- `keydown`
- `keyup`
- `input`
- `change`
- `submit`
- `scroll`
- `load`

### Tekrar Bakilacak Konular

- [ ] Git branch mantigi
- [ ] Pull Request sureci
- [ ] Git checkout uyarilari
- [ ] Design System yaklasimi
- [ ] Grid + `auto-fit` + `minmax`
- [ ] Responsive tablo tasarimi
- [ ] Form alanlari ve validation mantigi

## Backlog Komutlari

Bundan sonra asagidaki gibi kisa notlar yazabilirsin:

```text
Backlog'a ekle: Excel'den mevzuat ice aktarma
```

```text
Backlog'a tasi: Uyelik sistemi -> Yakinda Yapilacaklar
```

Bu tip notlari ilgili bolume eklemek veya tasimak icin bu dosya guncellenir.

console.log(now);

dashboard.js te ilgili constdan sonra console.log koyunca ve f12 ye tıklayıp console u açınca log lar gözüküyor. 

const weatherData = await response.json();

console.log(weatherData);
yazacağız ve API'nin bize ne gönderdiğini göreceğiz.

Ya da AI News widgetında:

console.log(newsData);

diyerek JSON'un içeriğini inceleyeceğiz.