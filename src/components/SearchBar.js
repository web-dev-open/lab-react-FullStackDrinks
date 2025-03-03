import "../App.css";

function SearchBar({ setSearch }) {
    return <input className="search" type="text" placeholder="Search beers..." onChange={(e) => setSearch(e.target.value)} />;
  }
  
  export default SearchBar;
  