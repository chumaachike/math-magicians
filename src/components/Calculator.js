/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import AllButtons from './AllButtons';
import Display from './Display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Display />
        <AllButtons />
      </div>
    );
  }
}

export default Calculator;
