import { useEffect, useState } from 'react';
import BeerCard from '../components/BeerCard';


const ListBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(data => setBeers(data));
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">All Beers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beers.map(beer => (
          <BeerCard key={beer._id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default ListBeersPage
