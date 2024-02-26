

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers'; 
import RandomBeer from './components/random-beer'; 
import NewBeer from './components/NewBeer'; 
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home/>
        
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
