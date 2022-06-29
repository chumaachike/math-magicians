/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`button ${this.props.rowspan} ${this.props.color}`}>{this.props.char}</div>
    );
  }
}

Button.propTypes = {
  char: propTypes.string,
  rowspan: propTypes.string,
  color: propTypes.string,
};

Button.defaultProps = {
  char: '',
  rowspan: 'one-row',
  color: 'ash',
};

export default Button;
