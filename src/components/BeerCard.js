import React from 'react'
import { Link } from 'react-router-dom';

const BeerCard = ({beer}) => {
  return (
    <div className="bg-white rounded shadow p-4 flex items-center">
      <img
        src={beer.image_url}
        alt={beer.name}
        className="w-16 h-16 object-contain mr-4"
      />
      <div>
        <h2 className="text-lg font-bold">{beer.name}</h2>
        <p className="text-sm text-gray-500">{beer.tagline}</p>
        <p className="text-xs text-gray-400">Contributed by: {beer.contributed_by}</p>
        <Link
          to={`/beers/${beer._id}`}
          className="text-blue-500 hover:underline text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BeerCard
