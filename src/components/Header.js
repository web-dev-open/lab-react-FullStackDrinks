import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="container">
      {!isHomePage && (
        <header className="bg-info p-3 text-center rounded-bottom">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none text-white mx-auto">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
