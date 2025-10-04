import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  if (!introEl || !data) return;
  const title = data.fullName || "";
  const desc = data.description || "";
  introEl.innerHTML = `<h1>${title}</h1><p>${desc}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  if (!infoEl || !Array.isArray(data) || data.length === 0) return;
  // map to html using template; mediaCardTemplate should handle missing fields
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  try {
    const parkData = await getParkData();
    if (!parkData) throw new Error("No park data returned");
    const images = Array.isArray(parkData.images) ? parkData.images : [];
    const links = getInfoLinks(images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
  } catch (err) {
    console.error("Initialization error:", err);
    // optional: render minimal fallback UI or show an error message
  }
}

init();