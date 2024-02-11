
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <Link to="/beers">
        <div id="all-beers" className="main-element">
            <img src="https://img.freepik.com/free-photo/saint-patrick-s-day-party-happy-friends-are-celebrating-drinking-green-beer_155003-20351.jpg?size=626&ext=jpg&ga=GA1.1.577742623.1707642237&semt=ais" alt="All Beers" />
            <h2>All Beers</h2>
            <p>Explore our vast collection of handcrafted beers from around the world.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div id="random-beer" className="main-element">
            <img src="https://img.freepik.com/free-photo/close-up-bartender-pouring-beer_171337-13762.jpg?size=626&ext=jpg&ga=GA1.1.577742623.1707642237&semt=ais" alt="Random Beer" />
            <h2>Random Beer</h2>
            <p>Discover a new favorite with our selection of random beers.</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div id="new-beer" className="main-element">
            <img src="https://img.freepik.com/free-vector/realistic-beer_98292-7275.jpg?size=626&ext=jpg&ga=GA1.1.577742623.1707642237&semt=ais" alt="New Beer" />
            <h2>New Beer</h2>
            <p>Create your own beer masterpiece with our easy-to-use new beer form.</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;