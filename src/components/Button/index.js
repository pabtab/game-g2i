import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({children, onClick, circle, circleState}) => {
  if (circle) {
    return (
      <button className={`Button Button__circle Button__circle--${circleState}`} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
