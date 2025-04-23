// includes.js
async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    // If we're loading the header, initialize the hamburger
    if (id === "header-include") {
      initHamburgerMenu();
    }
  } catch (error) {
    console.error(error);
  }
}
  
  // Call includes on page load
  window.addEventListener("DOMContentLoaded", () => {
  // Check for header placeholder
  const headerEl = document.getElementById("header-include");
  if (headerEl) {
    loadHTML("header-include", "includes/header.html");
  }

  // Check for footer placeholder
  const footerEl = document.getElementById("footer-include");
  if (footerEl) {
    loadHTML("footer-include", "includes/footer.html");
  }

  // Check for home page intro placeholder
  const homeIntroEl = document.getElementById("home-intro-include");
  if (homeIntroEl) {
    loadHTML("home-intro-include", "includes/home-intro.html");
  }

  // Check for about me placeholder
  const aboutMeEl = document.getElementById("about-me-include");
  if (aboutMeEl) {
    loadHTML("about-me-include", "includes/about-me.html");
  }
  });

  function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    if (!hamburger || !navMenu) {
      console.error("Hamburger menu elements not found in header.");
      return;
    }
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }