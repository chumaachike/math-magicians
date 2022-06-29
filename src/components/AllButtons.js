/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class AllButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttonschar = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  render() {
    const elements = this.buttonschar.map((button) => {
      if (button === '0') return (<Button key={this.buttonschar.indexOf(button)} char={button} rowspan="two-row" />);
      if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
        return (<Button key={this.buttonschar.indexOf(button)} char={button} color="orange" />);
      }
      return (<Button key={this.buttonschar.indexOf(button)} char={button} />);
    });
    return (
      <div className="buttons">
        {elements}
      </div>
    );
  }
}
export default AllButtons;
