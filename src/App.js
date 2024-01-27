import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
