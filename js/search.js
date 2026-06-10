const searchInput = document.querySelector(".search-input");
const searchClear = document.querySelector(".search-clear");

const tableRows = document.querySelectorAll("tbody tr");

function resetSearch() {
  searchInput.value = "";

  tableRows.forEach((row) => {
    row.style.display = "";
  });

  searchInput.focus();
}

if (searchInput && searchClear) {

  searchClear.addEventListener("click", () => {
    resetSearch();
  });

  searchInput.addEventListener("input", () => {

    const searchTerm =
      searchInput.value.toLowerCase();

    tableRows.forEach((row) => {

      const rowText =
        row.textContent.toLowerCase();

      if (rowText.includes(searchTerm)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }

    });

  });

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      resetSearch();
    }

  });

}