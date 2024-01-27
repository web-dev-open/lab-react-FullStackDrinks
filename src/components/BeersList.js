import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
        );
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded"
          id="search"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search"
        />
      </div>

      {beers.map((beer) => (
        <Link 
          key={beer._id}  
          className="text-decoration-none" 
          to={`/beers/${beer._id}`}
        >
          <div className="card mb-3 d-flex flex-row">
            <img
              src={beer.image_url}
              className="img-fluid rounded-start object-fit-contain p-4"
              alt={beer.name}
              style={{ width: '160px', height: '210px' }}
            />
            <div className="card-body">
              <h3 className="card-title mt-4 mb-3">{beer.name}</h3>
              <p className="card-text tagline">{beer.tagline}</p>
              <p className="card-text"><b>Contributed by: </b>{beer.contributed_by}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Beers;
