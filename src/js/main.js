import { getParkData } from "./parkService.mjs";

// replace synchronous call with async initialization
async function init() {
	try {
		const parkData = await getParkData();
		setHeaderInfo(parkData);
		// ...existing startup code that depends on parkData...
	} catch (err) {
		console.error("Failed to load park data:", err);
		// ...handle error UI/flow if needed...
	}
}

// define or ensure setHeaderInfo exists; merge this with your existing implementation
function setHeaderInfo(data) {
	// ...existing code that updates the header using `data`...
	// Example minimal-safe implementation:
	if (!data) return;
	// update DOM or perform other actions with data
}

// start app
init();

// ...existing code...