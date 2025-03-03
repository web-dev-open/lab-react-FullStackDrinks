import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBeerById } from "../api";

function BeerDetails() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetchBeerById(beerId).then((res) => setBeer(res.data));
  }, [beerId]);

  return beer ? (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} style={{ width: "100px" }} />
      <h2>{beer.name}</h2><br />
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default BeerDetails;
