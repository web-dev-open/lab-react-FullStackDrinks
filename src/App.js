import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import List from './components/List';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';
import BeerDetails from './components/BeerDetails';



function App() {
  return (
    <div >
      <NavBar/>

      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<AddBeer />} />
      <Route path="/beer/:id" element={<BeerDetails />} />
      <Route path="/add" element={<BeerDetails />} />
      </Routes>

    </div>
  );
}

export default App;
