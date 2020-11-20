import React from 'react';
import PropTypes from 'prop-types';

export const WelcomeButton = ({ handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className="btn"
  >
    Get Started
  </button>
);

WelcomeButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
