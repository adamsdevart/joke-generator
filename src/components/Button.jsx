import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = ({ onGenerateJoke, isLoading, disabled }) => {
  return (
    <button
      onClick={onGenerateJoke}
      disabled={disabled || isLoading}
      aria-label={isLoading ? "Loading joke..." : "Generate a new joke"}
      className="joke-button"
    >
      {isLoading ? "Loading..." : "Click to generate a joke"}
    </button>
  );
};

Button.propTypes = {
  onGenerateJoke: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
  disabled: false,
};

export default Button;
