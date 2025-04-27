// tables.js

async function loadTableContent() {
  const fullTable = document.getElementById("full-website-table-include");
  if (fullTable) {
    await loadHTML(fullTable.id, "includes/tables/full-website-table.html");
  }

  const compTable = document.getElementById("comp-website-table-include");
  if (compTable) {
    await loadHTML(compTable.id, "includes/tables/comp-website-table.html");
  }
}

document.addEventListener("DOMContentLoaded", loadTableContent);
