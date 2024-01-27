import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return <BeerDetails beer={beer} />;
};

export default RandomBeer;