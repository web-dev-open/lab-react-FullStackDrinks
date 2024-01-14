// Beers.js
import React, { useState } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import axios from 'axios';
// Remove the unused import statement
// import { Link } from 'react-router-dom';

// const Beers = () => {
//   const [beers, setBeers] = useState([]);

//   useEffect(() => {
//     const fetchBeers = async () => {
//       const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
//       setBeers(response.data);
//     };

//     fetchBeers();
//   }, []);

//   return (
//     <div>
//       <h2>All Beers</h2>
//       {beers.map((beer) => (
//         <div key={beer._id}>
//           <img src={beer.image_url} alt={beer.name} />
//           <h3>{beer.name}</h3>
//           <p>{beer.tagline}</p>
//           <p>Contributed by: {beer.contributed_by}</p>
//           <Link to={`/beers/${beer._id}`}>Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// Beers.js (updated)
// Add the following input to allow users to search for beers
const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Add this line

    const handleSearch = async (query) => {
        setSearchTerm(query);
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
            setBeers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Search beers" onChange={(e) => handleSearch(e.target.value)} />
            <h2>All Beers</h2>
            {beers.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                </div>
            ))}
        </div>
    );
};

export default Beers;
