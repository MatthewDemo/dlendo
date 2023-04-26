import React from "react";
import Image from "./image/Image";
import ProgressBar from "./progressBar/ProgressBar";
import ReturnTermBlock from "./return-term-block/ReturnTermBlock";
import LocationDistributionBlock from "./location-distribution-block/LocationDistributionBlock";

import styled from "styled-components";
import DescriptionBlock from "./description-block/DescriptionBlock";
import Buttons from "./buttons/Buttons";

const CardWrapper = styled.div`
  width: 240px;
  height: 460px;
  background-color: #15173c;
  border: 1px solid #26264a;
  margin-left: 15px;
  position: relative;
`;

const Card = ({ card }) => {
  return (
    <CardWrapper>
      <Image card={card} />
      <Buttons />
      <ProgressBar card={card} />
      <ReturnTermBlock card={card} />
      <LocationDistributionBlock card={card} />
      <DescriptionBlock card={card} />
    </CardWrapper>
  );
};

export default Card;
