/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import propTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayInput } = this.props;
    return (
      <div className="display">{displayInput}</div>
    );
  }
}
Display.propTypes = {
  displayInput: propTypes.string.isRequired,
};

export default Display;
