import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Card = props => {
  const { id, attributes } = props.item;
  const { posterImage, canonicalTitle, synopsis } = attributes;
  return (
    <div className="special column" key={id}>
      <Link to={`anime/detail/${id}`}>
        <div className="poster-overlay">
          <img
            src={posterImage.medium}
            alt="Card cap"
            key={id}
            data-tip
            data-for={id}
          />
        </div>
      </Link>
      <ReactTooltip id={id} className="customeTheme" place={"right"}>
        {canonicalTitle}
        <br />
        <div className="synopsis">{synopsis}</div>
      </ReactTooltip>
    </div>
  );
};

export default Card;
