function PlanetCard({ planet }) {
  return (
    <article>
      <h3>{planet.englishName}</h3>
      <p>Type: {planet.bodyType || "Planet"}</p>
      <p>Gravity: {planet.gravity ?? "N/A"} m/s²</p>
      <p>Mean radius: {planet.meanRadius ?? "N/A"} km</p>
      <p>Density: {planet.density ?? "N/A"} g/cm³</p>
      <p>Discovered by: {planet.discoveredBy || "Unknown"}</p>
    </article>
  );
}

export default PlanetCard;