async function loadNavbar() {

  const response = await fetch("/components/navbar/navbar.html");

  const data = await response.text();

  document.getElementById("navbar").innerHTML = data;

  initializeNavbar();

}

function initializeNavbar() {

  const menuToggle = document.getElementById("menu-toggle");

  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}

loadNavbar();