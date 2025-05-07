// home.js

async function loadHomeIntro() {
  const homeIntro = document.getElementById("home-intro-include");
  if (homeIntro) {
    await loadHTML(homeIntro.id, "../includes/page-components/home-intro.html");
  }
}

document.addEventListener("DOMContentLoaded", loadHomeIntro);
