import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import AllBeers from './components/Home/AllBeers';
import NewBeer from './components/Home/NewBeer';
import RandomBeer from './components/Home/RandomBeer';
import GetSingleBeer from './components/Home/GetSingleBeer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>

   

    <Routes>
    <Route  path='/' element={ <App />}/>
     <Route  path='/beers' element={<AllBeers/>}/>
     <Route path='/new-beer' element={<NewBeer/>} />
     <Route path='/random-beer' element={<RandomBeer/>} />
     <Route path='/beers/:beerId' element={<GetSingleBeer/>} />
      </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();