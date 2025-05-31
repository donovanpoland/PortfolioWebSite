// navigation.js

async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    // Run footer-specific logic after loading it
    if (id === "footer-include") {
      getYearAndLastModified();
    }

    if (id === "header-include") {
      initHamburgerMenu();
    }
  } catch (error) {
    console.error(error);
  }
}

// create hamburger menu
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
      document.body.style.setProperty('--scrollbar-compensation', `${scrollbarWidth}px`);
    } else {
      document.body.style.removeProperty('--scrollbar-compensation');
    }
  });

  backdrop.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
    backdrop.classList.remove("show");
    document.body.classList.remove("menu-open");
    document.body.style.removeProperty('--scrollbar-compensation');
  });
}

// Always load header and footer globally
window.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("header-include");
  if (headerEl) loadHTML("header-include", "../includes/navigation/header.html");

  const footerEl = document.getElementById("footer-include");
  if (footerEl) loadHTML("footer-include", "../includes/navigation/footer.html");
});

// get the current year and the last date/time the page was modified
function getYearAndLastModified() {
  const currentYear = document.querySelector("#current-year");
  const lastModified = document.querySelector("#last-modified");
  
  const today = new Date();
  const lastMod = new Date(document.lastModified);

  //check current year id is found on page
  if (currentYear) {
    //display the info
    currentYear.textContent = today.getFullYear();
  }

  //check if last modified id is found the page
  if (lastModified) {
    // Format date to MM/DD/YYYY HH:MM:SS (local)
    const localFormatted = lastMod.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // UTC time
    const utcFormatted = lastMod.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });

    const offsetMinutes = today.getTimezoneOffset();
    const offsetHours = -offsetMinutes / 60;
    const formattedOffset = `GMT${offsetHours >= 0 ? '+' : ''}${offsetHours}`;

    //display the info
    lastModified.innerHTML =
      `Last modified: ${localFormatted} ${formattedOffset}<br>` +
      `Last modified: ${utcFormatted} UTC`;
  } 
}

