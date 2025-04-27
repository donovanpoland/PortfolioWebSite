// navigation.js

async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (id === "header-include") {
      initHamburgerMenu();
    }
  } catch (error) {
    console.error(error);
  }
}

function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const backdrop = document.getElementById("menu-backdrop");

  if (!hamburger || !navMenu || !backdrop) {
    console.error("Menu elements not found.");
    return;
  }

  hamburger.addEventListener("click", () => {
    const menuIsOpen = navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
    backdrop.classList.toggle("show");
    document.body.classList.toggle("menu-open");

    if (menuIsOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.paddingRight = "";
    }
  });

  backdrop.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
    backdrop.classList.remove("show");
    document.body.classList.remove("menu-open");
    document.body.style.paddingRight = "";
  });
}

// Always load header and footer globally
window.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("header-include");
  if (headerEl) loadHTML("header-include", "includes/navigation/header.html");

  const footerEl = document.getElementById("footer-include");
  if (footerEl) loadHTML("footer-include", "includes/navigation/footer.html");
});
