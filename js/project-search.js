/*
==================================================
PROJECT SEARCH SYSTEM
==================================================

Bu dosya 3D Projeler sayfasındaki kartları
arama ve filtreleme işlemleri için oluşturuldu.

search.js dosyasından farkı:

search.js
→ Tablo satırlarını (tbody tr) filtreler.

project-search.js
→ Proje kartlarını (.card) filtreler.

Kullanıldığı sayfa:

/pages/3d/projeler/index.html

Planlanan Özellikler:

[ ] Kart filtreleme
[ ] Sonuç sayısı güncelleme
[ ] Clear (X) butonu
[ ] ESC ile temizleme
[ ] Kart bazlı kategori filtreleri

Son Güncelleme:
2026-06

==================================================
*/
const searchClear =
  document.querySelector(".search-clear");
function resetProjectSearch() {

  searchInput.value = "";

  projectCards.forEach((card) => {
    card.style.display = "";
  });

  updateProjectCount();

  searchInput.focus();

}

searchClear.addEventListener("click", () => {
  resetProjectSearch();
});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    resetProjectSearch();
  }

});
// Search alanını bul
const searchInput =
  document.querySelector(".search-input");

// Sonuç sayısını gösteren alanı bul
const searchCount =
  document.querySelector(".search-count");

// Sayfadaki tüm proje kartlarını bul
const projectCards =
  document.querySelectorAll(".card");


// Kart sayısını güncelle
function updateProjectCount() {

   let visibleCount = 0;

  projectCards.forEach((card) => {

    if (card.style.display !== "none") {
      visibleCount++;
    }

  });

  searchCount.textContent =
    `(${visibleCount} kayıt)`;


}
// Kullanıcı arama kutusuna yazı yazdığında çalışır
searchInput.addEventListener("input", () => {

  const searchTerm =
    searchInput.value.toLowerCase();

  projectCards.forEach((card) => {

    const cardText =
      card.textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

  updateProjectCount();

});

// Sayfa açılır açılmaz çalıştır
updateProjectCount();

