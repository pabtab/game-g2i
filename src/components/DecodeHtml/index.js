import React from "react";
import PropTypes from "prop-types";
import { decodeHtml } from "../../utils";

const DecodeHtml = ({text, className}) => {
  return <span className={className} dangerouslySetInnerHTML={decodeHtml(text)} />;
}

DecodeHtml.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default DecodeHtml
