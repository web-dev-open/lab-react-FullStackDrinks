// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home-contents">
      <h1>Welcome to RootBeers!</h1>
      <div>
        <Link to="./beers">
            <img src={require("../assets/beers.png")} alt="beer.png"/>
          <button>All Beers</button>
        </Link>
        <Link to="/random-beer">
            <img src={require("../assets/random-beer.png")} alt="random"/>
          <button>Random Beer</button>
        </Link>
        <Link to="/new-beer">
            <img src={require("../assets/new-beer.png" )} alt="new"/>
          <button>New Beer</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
