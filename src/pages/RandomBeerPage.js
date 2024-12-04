import { useEffect, useState } from 'react';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(res => res.json())
      .then(data => setBeer(data));
  }, []);

  if (!beer) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white shadow rounded p-4">
        <img
          src={beer.image_url}
          alt={beer.name}
          className="w-32 h-32 object-contain mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">{beer.name}</h1>
        <p className="text-sm text-gray-500">{beer.tagline}</p>
        <p className="mt-4">First Brewed: {beer.first_brewed}</p>
        <p>Attenuation Level: {beer.attenuation_level}</p>
        <p className="mt-2">{beer.description}</p>
        <p className="mt-4 text-gray-500">Contributed by: {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeerPage;
