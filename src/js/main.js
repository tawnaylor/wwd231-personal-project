import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

// main.js
import { getParkData } from "./parkService.mjs";
import { setHeaderFooter, setParkIntro, setParkInfoLinks } from "./utilities.mjs"; // example if you have these helpers

async function init() {
  const parkData = await getParkData("yell"); // change to your desired park code (e.g., glac)
  
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(parkData);
}

init();
