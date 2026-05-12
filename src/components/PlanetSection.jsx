import { useEffect, useState } from "react";
import img1 from "../../public/images (1).jpg"; // Your fallback image

function PlanetSection() {
  const [planetData, setPlanetData] = useState([]);

  const fetchPlanetData = async () => {
    try {
      const res = await fetch("https://anurella.github.io/json/planets.json");
      const data = await res.json();
      setPlanetData(data);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  useEffect(() => {
    fetchPlanetData();
  }, []);

  const handleImageError = (e) => {
    e.target.src = img1;
    e.target.alt = "Planet image unavailable";
  };

  return (
    <section id="planets">
      <div className="inner-container">
        <div className="head-text">
          <h4>Visualizing the Differences Between Planets</h4>
          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>
        </div>

        <div className="planet-grid">
          {planetData?.map((item, index) => (
            <div className="planet-card" key={index}>
              <img
                id="planet-img"
                src={`https://anurella.github.io/images/planets/${item?.image.slice(10)}`}
                alt={item?.planet || "Planet"}
                onError={handleImageError}
                loading="lazy"
              />
              <p>{item?.planet}</p>
              <p>Distance From Sun: {item?.distanceFromSun}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="planet-glance">
        <h2>Planetary Facts at a Glance</h2>
        <p>
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th rowspan="4" className="main-group">
                  Terrestrial Planets
                </th>
                <th rowspan="4"></th>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th rowspan="4" className="main-group">
                  Jovian Planets
                </th>
                <th rowspan="2" className="sub-group">
                  Gas Giants
                </th>
                <td>Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th rowspan="2" className="sub-group">
                  Ice Giants
                </th>
                <td>Uranus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th className="main-group">Dwarf Planet</th>
                <th></th>
                <td>Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PlanetSection;
