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
// parkService.mjs

const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

export async function getParkData() {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  
  let data = {};
  const response = await fetch(baseUrl + "parks" + "?parkCode=yell", options);
  
  if (response.ok) {
    data = await response.json();
  } else {
    throw new Error("response not ok");
  }

  return data;
}
