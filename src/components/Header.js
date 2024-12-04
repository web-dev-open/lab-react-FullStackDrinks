import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <Link to="/" className="text-2xl font-bold">
          🍻Beer
        </Link>
      </div>
    </div>
  );
}

export default Header
