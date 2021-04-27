import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, icon, color, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-outline-${color} btn-sm`}>
      {text} {icon}
    </button>
  );
};

Button.defaultProps = {
  color: "success",
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
