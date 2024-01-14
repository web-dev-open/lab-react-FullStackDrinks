// Beers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      setBeers(response.data);
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <h2>All Beers</h2>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Beers;
