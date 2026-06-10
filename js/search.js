const searchInput = document.querySelector(".search-input");
const searchClear = document.querySelector(".search-clear");

if (searchInput && searchClear) {

  searchClear.addEventListener("click", () => {

    searchInput.value = "";

    searchInput.focus();

  });

}