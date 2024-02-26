// src/components/Beers.js

import React, { useState, useEffect } from 'react';

function Beers() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
        if (response.ok) {
          const data = await response.json();
          setBeers(data);
          setIsLoading(false);
        } else {
          console.error('Failed to fetch filtered beers');
        }
      } catch (error) {
        console.error('Error fetching filtered beers:', error);
      }
    };

    if (searchQuery) {
      fetchBeers();
    }

    return () => {
     
      setIsLoading(true);
    };
  }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>All Beers</h1>
      <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search beers..." />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {beers.length === 0 ? (
            <div>No beers found</div>
          ) : (
            <div>
              {beers.map((beer) => (
                <div key={beer._id}>
                  <img src={beer.image_url} alt={beer.name} style={{ width: '100px' }} />
                  <p>Name: {beer.name}</p>
                  <p>Tagline: {beer.tagline}</p>
                  <p>Contributed by: {beer.contributed_by}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Beers;
