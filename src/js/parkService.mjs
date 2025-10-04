import parkData from "./data/parkData.mjs"; // assumes your dataset file

export function getParkData() {
  return parkData;
}

export const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description: "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];
