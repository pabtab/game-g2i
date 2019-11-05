import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";
import DecodeHtml from "../DecodeHtml";

const Card = ({text}) => {
  return (
    <article className="Card">
      <DecodeHtml text={text} />
    </article>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired
}

export default Card
