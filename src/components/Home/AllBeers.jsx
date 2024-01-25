import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import SearchComponent from "./SearchComponent";
import BeerCard from "./BeerCard";




const AllBeers = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [displayBeers,setDisplayBeers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBears = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeers(response.data);
        setDisplayBeers(response.data)
        setLoading(false);
      } catch (error) {
        console.error("error: ", error);
        setLoading(false);
        setError(error);
      }
    };

    getAllBears();
  }, []);

  const handleSearch = (fillteredBeers)=>{
    setDisplayBeers(fillteredBeers)
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return (
      <p>
        Error: <p>{error.message}</p>
      </p>
    );
  }
 
  

  return (
    <>
      <Header />
     <SearchComponent Beers={allBeers} onSearchInput={handleSearch}/>
      <div className="container">
        {displayBeers.map((beer) => (
          <div key={beer._id} className=" flex flex-col  items-center">
            <BeerCard
              img={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              contributed_by={beer.contributed_by}
              beerId={beer._id}
            />
    
          </div>
      

        ))}
      </div>
    </>
  );
};

export default AllBeers;