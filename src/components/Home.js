import React from 'react';
import { Link } from 'react-router-dom';
import allBeersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

function Home() {
  return (
    <div className="container">
      <h1 className="text-center mt-2">Root Beers</h1>
      <Link className="text-decoration-none" to="/beers">
        <div className="card mt-3">
          <img src={allBeersImage} alt="All Beers" className="card-img-top w-full" />
          <div className="card-body">
            <h2 className="card-title">All Beers</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </Link>
      
      <Link to="/random-beer" className="text-decoration-none text-dark">
        <div className="card mt-3">
          <img src={randomBeerImage} alt="Random Beer" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">Random Beer</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div> 
        </div>
      </Link>

      <Link to="/new-beer" className="text-decoration-none text-dark">
        <div className="card mt-3">
          <img src={newBeerImage} alt="New Beer" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">New Beer</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>  
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
