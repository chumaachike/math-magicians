import React from 'react';
import propTypes from 'prop-types';

function Button({
  getInput, char, rowspan, color,
}) {
  const buttonschar = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const handleEvent = (event) => {
    if (!event.key) {
      getInput(char);
    } else if (event.key === 'Enter') {
      getInput('=');
    } else if (event.key === 'Escape') {
      getInput('AC');
    } else if (event.key && buttonschar.includes(event.key)) {
      getInput(event.key);
    }
  };

  return (
    <div role="button" tabIndex={0} onClick={handleEvent} onKeyUp={handleEvent} className={`button ${rowspan} ${color}`}>{char}</div>
  );
}

Button.propTypes = {
  char: propTypes.string,
  rowspan: propTypes.string,
  color: propTypes.string,
  getInput: propTypes.func.isRequired,
};

Button.defaultProps = {
  char: '',
  rowspan: 'one-row',
  color: 'ash',

};

export default Button;
