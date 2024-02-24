// src/components/RandomBeer.js

import React, { useState, useEffect } from 'react';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => response.json())
      .then(data => {
        setRandomBeer(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching random beer:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!randomBeer) {
    return <div>Random beer not found</div>;
  }

  return (
    <div>
      <h1>Random Beer</h1>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ width: '100px' }} />
      <p>Name: {randomBeer.name}</p>
      <p>Tagline: {randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
