// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../Header.css"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
              <div className='Home'>
              <img src= {require ("../assets/home.png")} alt="home" />
              </div>
              
          </Link>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
