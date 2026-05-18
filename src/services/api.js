const API_BASE_URL = "https://api.le-systeme-solaire.net/rest/bodies/";

export async function fetchPlanets() {
  const response = await fetch(API_BASE_URL);

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
