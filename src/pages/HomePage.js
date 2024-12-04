import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">Welcome to Beer Showcase</h1>
      <div className="space-y-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link to="/beers">
            <img src={beersImage} alt="All Beers" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">All Beers</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
                egestas lectus, sit amet eleifend ex tincidunt in.
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link to="/random-beer">
            <img src={randomBeerImage} alt="Random Beer" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Random Beer</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
                egestas lectus, sit amet eleifend ex tincidunt in.
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link to="/new-beer">
            <img src={newBeerImage} alt="New Beer" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">New Beer</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
                egestas lectus, sit amet eleifend ex tincidunt in.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage
