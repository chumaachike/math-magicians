import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ caption }) {
  return (
    <div className="container">
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </ul>
      </nav>
      <h3>{caption}</h3>
    </div>
  );
}

Header.propTypes = {
  caption: propTypes.string.isRequired,
};

export default Header;
