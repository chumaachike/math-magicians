/* eslint-disable react/require-default-props */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.key) return;
    const { getInput, char } = this.props;
    getInput(char);
  }

  render() {
    const { rowspan, color, char } = this.props;
    return (
      <div role="button" tabIndex={0} onClick={this.handleClick} onKeyUp={this.handleClick} className={`button ${rowspan} ${color}`}>{char}</div>
    );
  }
}

Button.propTypes = {
  char: propTypes.string,
  rowspan: propTypes.string,
  color: propTypes.string,
  getInput: propTypes.func,
};

Button.defaultProps = {
  char: '',
  rowspan: 'one-row',
  color: 'ash',

};

export default Button;
