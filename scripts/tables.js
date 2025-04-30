// tables.js

async function loadTableContent() {
  const newTable = document.getElementById("new-web-include");
  if (newTable) {
    await loadHTML(newTable.id, "includes/tables/new-web.html");
  }

  const rebuildTable = document.getElementById("rebuild-web-include");
  if (rebuildTable) {
    await loadHTML(rebuildTable.id, "includes/tables/rebuild-web.html");
  }
}

document.addEventListener("DOMContentLoaded", loadTableContent);
