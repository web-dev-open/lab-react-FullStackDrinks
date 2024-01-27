import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BeerDetails from './BeerDetails';

const SingleBeer = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching beer details:', error);
      }
    };

    fetchBeer();
  }, [beerId]);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return <BeerDetails beer={beer} />;
};

export default SingleBeer;