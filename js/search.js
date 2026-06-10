const searchCount = document.querySelector(".search-count");
const searchInput = document.querySelector(".search-input");
const searchClear = document.querySelector(".search-clear");

const tableRows = document.querySelectorAll("tbody tr");

function updateSearchCount() {
  let visibleCount = 0;

  tableRows.forEach((row) => {
    if (row.style.display !== "none") {
      visibleCount++;
    }
  });

  searchCount.textContent = `(${visibleCount} kayıt)`;
}

function resetSearch() {
  searchInput.value = "";

  tableRows.forEach((row) => {
    row.style.display = "";
  });

  updateSearchCount();

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

    updateSearchCount();

  });

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      resetSearch();
    }

  });

}