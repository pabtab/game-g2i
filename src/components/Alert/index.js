import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

const Alert = ({children, type}) => {
  return (
    <div className={`Alert Alert--${type}`}>
      {children}
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string
}

Alert.defaultProps = {
  type: 'default'
}

export default Alert
