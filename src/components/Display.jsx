import React from 'react';
import propTypes from 'prop-types';
import styles from './Calculator.module.css';

function Display({ displayInput }) {
  return (
    <div className={styles.display}>{displayInput}</div>
  );
}
Display.propTypes = {
  displayInput: propTypes.string.isRequired,
};

export default Display;
