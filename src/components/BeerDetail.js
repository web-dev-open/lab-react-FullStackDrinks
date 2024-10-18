// src/components/BeerDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const BeerDetail = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        const fetchBeerDetail = async () => {
            const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
            const data = await response.json();
            setBeer(data[0]);
        };
        fetchBeerDetail();
    }, [id]);

    return (
        <div className="beer-detail">
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

export default BeerDetail;
