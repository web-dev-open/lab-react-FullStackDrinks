import { useEffect, useState } from "react";
import { fetchRandomBeer } from "../api";
import "../App.css";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetchRandomBeer().then((res) => setBeer(res.data));
  }, []);

  return beer ? (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ width: "100px" }} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default RandomBeer;
