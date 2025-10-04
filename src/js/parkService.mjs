const park = {
  fullName: "Yellowstone National Park",
  name: "Yellowstone",
  designation: "National Park",
  states: "Wyoming, Montana, Idaho",
  url: "https://www.nps.gov/yell/index.htm",
  images: [
    {
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg",
      altText: "Yellowstone National Park"
    }
  ]
};

export function getParkData() {
  return park;
}
