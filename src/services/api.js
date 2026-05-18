const API_BASE_URL = "https://api.le-systeme-solaire.net/rest/bodies/";
const API_KEY = import.meta.env.VITE_PLANET_API_KEY;

export async function fetchPlanets() {
  if (!API_KEY) {
    throw new Error(
      "Missing planet API key. Add VITE_PLANET_API_KEY to your .env file using the key from https://api.le-systeme-solaire.net/generatekey.html"
    );
  }

  const response = await fetch(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Planet API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const bodies = data?.bodies ?? [];

  return bodies
    .filter((body) => body.isPlanet === true)
    .map((planet) => ({
      id: planet.id || planet.englishName,
      englishName: planet.englishName,
      gravity: planet.gravity,
      meanRadius: planet.meanRadius,
      density: planet.density,
      discoveredBy: planet.discoveredBy,
      bodyType: planet.bodyType,
    }));
}
