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
    loadHTML("header-include", "header.html");
    loadHTML("footer-include", "footer.html");
  });