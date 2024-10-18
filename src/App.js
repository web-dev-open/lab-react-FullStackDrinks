// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import 'D:/Palak Jain/lab-react-FullStackDrinks/src/components/style.css';

const App = () => {
  const [beers, setBeers] = useState([]);

    const addBeer = (newBeer) => {
        setBeers([...beers, newBeer]); // Update beers list
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/beers" element={<Beers beers={beers}  />} />
                    <Route path="/beers/:id" element={<BeerDetail beers={beers} />} />
                    <Route path="/new-beer" element={<NewBeer addBeer={addBeer}/>} />
                    <Route path="/random-beer" element={<RandomBeer beers={beers}/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
