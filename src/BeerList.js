import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>All Beers</h2>
      <input type="text" placeholder="Search for beers" value={searchQuery} onChange={handleSearchChange} />
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '50px' }} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            {/* Link to beer details */}
            <Link to={`/beers/${beer.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeerList;