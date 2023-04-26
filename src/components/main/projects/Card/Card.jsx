import React, { useState } from "react";
import LeftWhiteArrow from "../../../../assets/img/projects/left-white-arrow.svg";
import RightWhiteArrow from "../../../../assets/img/projects/right-white-arrow.svg";
import RightCircleButton from "../../../../assets/img/projects/right-circle-button.svg";
import NewIcon from "../../../../assets/img/projects/new-icon.svg";
import ProgressBar from "./progressBar/ProgressBar";
import ReturnTermBlock from "./return-term-block/ReturnTermBlock";
import LocationDistributionBlock from "./location-distribution-block/LocationDistributionBlock";

import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin: -15px 24px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;
const CardWrapper = styled.div`
  width: 240px;
  height: 460px;
  background-color: #15173c;
  border: 1px solid #26264a;
  margin-left: 15px;
  position: relative;
`;
const ImageWrapper = styled.div`
  height: 196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
const AddressWrapper = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
`;
const Button = styled.button`
  width: 30px;
  height: 28px;
  border: 1px solid rgba(38, 38, 74, 0.4);
  border-radius: ${({ left }) => (left ? "50px 0 0 50px" : "0 14px 14px 0")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: rgba(0, 0, 0, 0.55);
    opacity: 1;
  }
`;
const LeftButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 0 50px 50px 0;
`;
const RightButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-radius: 50px 0 0 50px;
`;
const CircleButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #323054;
  border-radius: 50%;
  background-color: #1e2044;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Card = ({ card }) => {
  const [activePhoto, setActivePhoto] = useState(0);

  const handleLeftButtonClick = () => {
    if (activePhoto > 0) {
      setActivePhoto(activePhoto - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (activePhoto < card.photos.length - 1) {
      setActivePhoto(activePhoto + 1);
    }
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <LeftButton onClick={handleLeftButtonClick}>
          <img src={LeftWhiteArrow} alt="" />
        </LeftButton>
        <img src={card.photos[activePhoto]} alt="" />
        <RightButton onClick={handleRightButtonClick}>
          <img src={RightWhiteArrow} alt="" />
        </RightButton>
        <AddressWrapper>{card.address}</AddressWrapper>
      </ImageWrapper>
      <ButtonWrapper>
        <CircleButton>
          <img src={NewIcon} alt="" />
        </CircleButton>
        <CircleButton>
          <img src={RightCircleButton} alt="" />
        </CircleButton>
      </ButtonWrapper>
      <ProgressBar card={card}/>
      <ReturnTermBlock card={card}/>
      <LocationDistributionBlock card={card}/>
    </CardWrapper>
  );
};

export default Card;
