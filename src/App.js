import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeerForm from './components/NewBeerForm';
import './App.css'
import HomePage from './components/HomePage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeerForm />} />
      </Routes>
    </Router>
  );
};

export default App;