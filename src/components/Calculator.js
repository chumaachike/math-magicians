/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: '',
    };
    this.buttonschar = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    this.getInput = this.getInput.bind(this);
  }

  getInput(event) {
    this.setState((prevState) => calculate(prevState, event));
  }

  render() {
    const { next, total } = this.state;
    const elements = this.buttonschar.map((button) => {
      if (button === '0') return (<Button key={this.buttonschar.indexOf(button)} char={button} rowspan="two-row" getInput={this.getInput} />);
      if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
        return (<Button key={this.buttonschar.indexOf(button)} char={button} color="orange" getInput={this.getInput} />);
      }
      return (
        <Button
          key={this.buttonschar.indexOf(button)}
          char={button}
          getInput={this.getInput}
        />
      );
    });
    return (
      <div className="container">
        <Display displayInput={next || total || '0'} />
        <div className="buttons">
          {elements}
        </div>
      </div>
    );
  }
}

export default Calculator;
