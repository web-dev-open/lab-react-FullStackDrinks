// src/components/SingleBeer.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => response.json())
      .then(data => {
        setBeer(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching beer details:', error);
        setIsLoading(false);
      });
  }, [beerId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!beer) {
    return <div>Beer not found</div>;
  }

  return (
    <div>
      <h1>Beer Details</h1>
      <img src={beer.image_url} alt={beer.name} style={{ width: '100px' }} />
      <p>Name: {beer.name}</p>
      <p>Tagline: {beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
