import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
export function parkInfoTemplate(data) {
  return `
    <h2>${data.fullName}</h2>
    <p>${data.description}</p>
  `;
}

export function mediaCardTemplate(info) {
  return `
    <div class="media-card">
      <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card__img">
        <h3 class="media-card__title">${info.name}</h3>
      </a>
      <p>${info.description}</p>
    </div>`;
}

export function getMailingAddress(addresses) {
  return addresses.find((address) => address.type === "Mailing");
}

export function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `
    <section class="contact">
      <h3>Contact Info</h3>
      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${voice}</p>
    </section>`;
}
import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-banner > img").src = data.images[0].url;

  document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(data) {
  setHeaderInfo(data);
  setFooter(data);
}
