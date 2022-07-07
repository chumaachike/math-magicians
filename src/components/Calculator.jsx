import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import Header from './Header';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const buttonschar = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const getInput = (event) => {
    setState(calculate(state, event));
  };

  const { next, total } = state;
  const elements = buttonschar.map((button) => {
    if (button === '0') return (<Button key={buttonschar.indexOf(button)} char={button} rowspan="two-row" getInput={getInput} />);
    if (button === '÷' || button === 'x' || button === '-' || button === '+' || button === '=') {
      return (<Button key={buttonschar.indexOf(button)} char={button} color="orange" getInput={getInput} />);
    }
    return (
      <Button
        key={buttonschar.indexOf(button)}
        char={button}
        getInput={getInput}
      />
    );
  });
  return (
    <div className={styles.container}>
      <Header caption="Let's do some maths!" />
      <div className={styles.calculator}>
        <Display displayInput={next || total || '0'} />
        <div className={styles.buttons}>
          {elements}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
