// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import beersImg from '../assets/beers.png';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to FullStackDrinks</h1>
            <img src={beersImg} alt="Beers" className="home-image" />
            <div className="home-links">
                <Link to="/beers" className="home-link">All Beers</Link>
                <Link to="/random-beer" className="home-link">Random Beer</Link>
                <Link to="/new-beer" className="home-link">New Beer</Link>
            </div>
        </div>
    );
};

export default Home;
