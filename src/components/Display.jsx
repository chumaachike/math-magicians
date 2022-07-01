import React from 'react';
import propTypes from 'prop-types';

function Display({ displayInput }) {
  return (
    <div className="display">{displayInput}</div>
  );
}
Display.propTypes = {
  displayInput: propTypes.string.isRequired,
};

export default Display;
