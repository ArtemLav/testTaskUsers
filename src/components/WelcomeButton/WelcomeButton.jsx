import React from 'react';
import PropTypes from 'prop-types';

export const WelcomeButton = ({ handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className="btn btn-primary d-block mx-auto"
  >
    Get Started
  </button>
);

WelcomeButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
