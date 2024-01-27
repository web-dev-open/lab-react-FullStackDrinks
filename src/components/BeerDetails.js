import React from 'react';

const BeerDetails = ({ beer }) => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <img
          src={beer.image_url}
          className="img-fluid rounded beer-image"
          alt={beer.name}
        />
      </div>

      <div className="d-flex justify-content-between mt-3">
        <h1 className="mt-4">{beer.name}</h1>
        <p className="tagline mt-3">{beer.attenuation_level}</p>
      </div>

      <div className="d-flex justify-content-between mt-2">
        <p className="tagline">{beer.tagline}</p>
        <p className="fw-bold">{beer.first_brewed}</p>
      </div>

      <p>{beer.description}</p>
      <p className="text-secondary fw-bold">{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;