async function loadNavbar() {

  const response = await fetch("/components/navbar/navbar.html");

  const data = await response.text();

  document.getElementById("navbar").innerHTML = data;

  initializeNavbar();

  initializeTheme();

  initializeActiveNavLink();

}

function initializeNavbar() {

  const menuToggle = document.getElementById("menu-toggle");

  const navLinks = document.getElementById("nav-links");

  if (!menuToggle || !navLinks) {
    return;
  }

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}

function initializeActiveNavLink() {

  const currentPath = window.location.pathname;

  const navLinkItems = document.querySelectorAll(".nav-links a");

  navLinkItems.forEach(link => {

    const linkPath = link.getAttribute("href");

    if (currentPath === linkPath) {

      link.classList.add("active");

    }

  });

}

loadNavbar();