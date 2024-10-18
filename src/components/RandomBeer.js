// src/components/RandomBeer.js
import React, { useEffect, useState } from 'react';
import './style.css';

const RandomBeer = () => {
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        const fetchRandomBeer = async () => {
            const response = await fetch('https://api.punkapi.com/v2/beers/random');
            const data = await response.json();
            setBeer(data[0]);
        };
        fetchRandomBeer();
    }, []);

    return (
        <div className="random-beer">
            {beer ? (
                <>
                    <h2>{beer.name}</h2>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>{beer.description}</p>
                    <p><strong>ABV:</strong> {beer.abv}%</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomBeer;
