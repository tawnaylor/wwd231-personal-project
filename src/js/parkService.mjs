// parkService.mjs
const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

// Helper function to handle API requests
async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } else {
    throw new Error("response not ok");
  }
  return data;
}

// Get main park data
export async function getParkData(parkCode = "yell") {
  const parkData = await getJson(`parks?parkCode=${parkCode}`);
  return parkData.data[0];
}

// Example of another API call (visitor centers)
export async function getVisitorCenterData(parkCode = "yell") {
  const vcData = await getJson(`visitorcenters?parkCode=${parkCode}`);
  return vcData.data[0];
}
