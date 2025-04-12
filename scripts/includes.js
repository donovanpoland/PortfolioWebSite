// includes.js
async function loadHTML(id, file) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to fetch ${file}`);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call includes on page load
  window.addEventListener("DOMContentLoaded", () => {
  // Check for header placeholder
  const headerEl = document.getElementById("header-include");
  if (headerEl) {
    loadHTML("header-include", "header.html");
  }

  // Check for footer placeholder
  const footerEl = document.getElementById("footer-include");
  if (footerEl) {
    loadHTML("footer-include", "footer.html");
  }

  // Check for home page intro placeholder
  const homeIntroEl = document.getElementById("home-intro-include");
  if (homeIntroEl) {
    loadHTML("home-intro-include", "home-intro.html");
  }

  // Check for about me placeholder
  const aboutMeEl = document.getElementById("about-me-include");
  if (aboutMeEl) {
    loadHTML("about-me-include", "about-me.html");
  }
  });