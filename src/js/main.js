import { getParkData } from "./parkService.mjs";
function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  if (disclaimer && data && data.url) {
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName || disclaimer.innerHTML;
  }

  // update the title of the site
  const titleEl = document.querySelector("head > title");
  if (titleEl && data && data.fullName) {
    titleEl.textContent = data.fullName;
  }

  // set the banner image
  const bannerImg = document.querySelector(".hero-banner > img");
  if (bannerImg && data && data.images && data.images[0] && data.images[0].url) {
    bannerImg.src = data.images[0].url;
  }

  // use template function if available, otherwise render a minimal fallback
  const contentEl = document.querySelector(".hero-banner__content");
  if (!contentEl) return;

  if (typeof parkInfoTemplate === "function") {
    contentEl.innerHTML = parkInfoTemplate(data);
  } else {
    // minimal safe fallback
    contentEl.innerHTML = `
      <h1>${(data && data.fullName) || "Park"}</h1>
      <p>${(data && data.description) || ""}</p>
    `;
  }
}

// async initialization to load park data and populate header
async function init() {
  try {
    const data = await getParkData();
    if (!data) throw new Error("No park data returned");
    setHeaderInfo(data);
    // ...existing startup code that depends on park data...
  } catch (err) {
    console.error("Failed to load park data:", err);
    // optionally show a user-visible error or fallback UI here
  }
}

// start app
init();