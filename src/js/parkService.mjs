const park = {
  fullName: "Yellowstone National Park",
  name: "Yellowstone",
  designation: "National Park",
  description:
    "Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot.",
  states: "Wyoming, Montana, Idaho",
  url: "https://www.nps.gov/yell/index.htm",
  images: [
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5922-1DD8-B71B-0B83F10A233A0F52.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5923-1DD8-B71B-0B83F66A64E671A0.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5924-1DD8-B71B-0B83F789E92A53A8.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5925-1DD8-B71B-0B83F8D6D2FA8E5F.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5926-1DD8-B71B-0B83F91F54E10B8D.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5927-1DD8-B71B-0B83F9FA6BEBE06B.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5928-1DD8-B71B-0B83FB9DBA83355C.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5929-1DD8-B71B-0B83FCC04874A6A5.jpg" },
    { url: "https://www.nps.gov/common/uploads/structured_data/3C7D5930-1DD8-B71B-0B83FDD921D8B84C.jpg" }
  ],
  contacts: {
    phoneNumbers: [
      { phoneNumber: "307-344-7381", type: "Voice" },
      { phoneNumber: "307-344-2014", type: "Fax" }
    ]
  },
  addresses: [
    {
      type: "Mailing",
      line1: "P.O. Box 168",
      city: "Yellowstone National Park",
      stateCode: "WY",
      postalCode: "82190-0168"
    },
    {
      type: "Physical",
      line1: "1 Grand Loop Rd",
      city: "Yellowstone National Park",
      stateCode: "WY",
      postalCode: "82190"
    }
  ]
};

// new array for the info section
export const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: park.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: park.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: park.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];

export function getParkData() {
  return park;
}
