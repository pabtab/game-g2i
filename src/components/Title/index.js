import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const Title = ({text}) => {
  return (
    <h1 className="Title">{text}</h1>
  )
}

Title.propTypes = {
  text: PropTypes.string
}

export default Title
