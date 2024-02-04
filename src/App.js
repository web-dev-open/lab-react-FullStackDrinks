// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import NewBeerForm from './NewBeerForm';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/beers">All Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
      </nav>
      <Routes>
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeerForm />} />
      </Routes>
    </Router>
  );
};

export default App;
