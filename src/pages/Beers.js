import { useEffect, useState } from "react";
import { fetchBeers } from "../api";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../App.css";

function Beers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBeers().then((res) => setBeers(res.data));
  }, []);

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <div className="beer-list-container">
      {beers
        .filter((beer) => beer.name.toLowerCase().includes(search.toLowerCase()))
        .map((beer) => (
        <Link to={`/beers/${beer._id}`} key={beer._id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} style={{ width: "50px" }} />
            <div>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            </div>
        </Link>
          
        ))}
    </div>
    </div>
  );
}

export default Beers;
