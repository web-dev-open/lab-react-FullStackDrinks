// src/components/Beers.js
import React from 'react';

const Beers = ({ beers }) => {
    return (
        <div className="beers">
            <h2>All Beers</h2>
            <ul>
                {beers.map((beer, index) => (
                    <li key={index}>
                        <img src={beer.image} alt={beer.name} />
                        <h3>{beer.name}</h3>
                        <p>{beer.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Beers;
