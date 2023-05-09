import React from "react";
import "./Card.scss";
import Image from "./image/Image";
import ProgressBar from "./progressBar/ProgressBar";
import ReturnTermBlock from "./return-term-block/ReturnTermBlock";
import LocationDistributionBlock from "./location-distribution-block/LocationDistributionBlock";
import DescriptionBlock from "./description-block/DescriptionBlock";
import Buttons from "./buttons/Buttons";


const Card = ({ card }) => {
  return (
    <div className="card-wrapper">
      <Image card={card} />
      <Buttons />
      <ProgressBar card={card} />
      <ReturnTermBlock card={card} />
      <LocationDistributionBlock card={card} />
      <DescriptionBlock card={card} />
    </div>
  );
};

export default Card;
