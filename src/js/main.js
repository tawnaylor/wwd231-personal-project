import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

// fixed: use the passed-in data (not the unresolved parkData variable)
function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  if (!introEl || !data) return;
  introEl.innerHTML = `<h1>${data.fullName || ""}</h1>
  <p>${data.description || ""}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  if (!infoEl || !Array.isArray(data)) return;
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

// async initialization: await park data, then populate UI
async function init() {
  try {
    const parkData = await getParkData();
    if (!parkData) throw new Error("No park data returned from getParkData()");
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    // parkInfoLinks is imported; ensure it's an array before using
    setParkInfoLinks(Array.isArray(parkInfoLinks) ? parkInfoLinks : []);
    // ...existing startup code...
  } catch (err) {
    console.error("Initialization error:", err);
    // ...optional UI fallback...
  }
}

init();