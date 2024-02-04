import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

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
      <Navbar/>
      <div>
      <h1>All Beers</h1>
      <input type="text" placeholder="Search for beers" value={searchQuery} onChange={handleSearchChange} />
      <div className='beer'>
        {beers.map((beer) => (
          <div key={beer.id}>
            <img src={beer.image_url} alt={beer.name}/>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer.id}`}>Details</Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BeerList;