import React from "react";
import "./DescriptionBlock.scss";

const DescriptionBlock = ({ card }) => {
  const maxLength = 64;
  const text = card.description.length > maxLength ? card.description.slice(0, maxLength) + "..." : card.description;

  return (
    <div className="description-block">
      <p className="description-text">{text}</p>
    </div>
  );
};

export default DescriptionBlock;
