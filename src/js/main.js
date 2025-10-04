import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update disclaimer link
const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Update page title
document.title = parkData.fullName;

// Update hero image
const heroImage = document.querySelector(".hero-banner__image");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

// Update park info (name, designation, states)
const heroInfo = document.querySelector(".hero-banner__info");
heroInfo.innerHTML = parkInfoTemplate(parkData);

function parkInfoTemplate(info) {
  return `
    <a href="${info.url}" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span> |
      <span>${info.states}</span>
    </p>
  `;
}
