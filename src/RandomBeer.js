// RandomBeer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const fetchRandomBeer = async () => {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
      setBeer(response.data);
    };

    fetchRandomBeer();
  }, []);

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
