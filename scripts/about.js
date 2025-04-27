// about.js

async function loadAboutMe() {
  const aboutMe = document.getElementById("about-me-include");
  if (aboutMe) {
    await loadHTML(aboutMe.id, "includes/page-components/about-me.html");
  }
}

document.addEventListener("DOMContentLoaded", loadAboutMe);
