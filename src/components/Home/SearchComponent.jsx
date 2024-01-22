import { useState } from "react";
import { FaSearch } from "react-icons/fa";





const SearchComponent = ({Beers,onSearchInput}) => {

  const [seachValue ,setSearchValue] = useState('')
  
  function searchBeer(e){
    const value = e.target.value;
    setSearchValue(value)

  const fillteredBeers =   Beers.filter((oneBeer)=>(
    oneBeer.name.toLowerCase().includes(value.toLowerCase())
  ))

  
  onSearchInput(value===""?Beers:fillteredBeers)
  }

  
    return (
      <div className="relative w-1/3 my-10 mx-10">
        <input
          type="text"
          placeholder= 'Search...'
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={seachValue}
          onChange={searchBeer}
        />
        <FaSearch  className="absolute right-3 top-2 text-gray-500 text-2xl"/>
     
      </div>
    );
  };
  

  export default SearchComponent