import React, { useState } from "react";
import LeftWhiteArrow from "../../../../../assets/img/projects/left-white-arrow.svg";
import RightWhiteArrow from "../../../../../assets/img/projects/right-white-arrow.svg";
import EyeIcon from "../../../../../assets/img/projects/eye-icon.svg";
import styled from "styled-components";

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
  z-index: 1;
`;
const LeftButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 0 50px 50px 0;
  z-index: 2;
`;
const RightButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-radius: 50px 0 0 50px;
  z-index: 2;
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
  bottom: 0px;
  left: 0;
  right: 0;
`;
const ImageWrapper = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-size: contain;
   &:hover .main-img {
     opacity: 0.4;
     background-color: rgba(0, 0, 0, 0.9);
   }
`;

const OverlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(30, 32, 68, 0.7);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const Image = ({ card }) => {
  const [activePhoto, setActivePhoto] = useState(0);

  const handleLeftButtonClick = () => {
    if (activePhoto > 0) {
      setActivePhoto(activePhoto - 1);
    } else {
      setActivePhoto(card.photos.length - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (activePhoto < card.photos.length - 1) {
      setActivePhoto(activePhoto + 1);
    }
  };

  const handleOverlayButtonClick = () => {
    // Действия при нажатии на кнопку
  };

  return (
    <ImageWrapper>
      <LeftButton onClick={handleLeftButtonClick}>
        <img src={LeftWhiteArrow} alt="" />
      </LeftButton>
      <img className="main-img" src={card.photos[activePhoto]} alt="" />
      <RightButton onClick={handleRightButtonClick}>
        <img src={RightWhiteArrow} alt="" />
      </RightButton>
      <AddressWrapper>{card.address}</AddressWrapper>
      <OverlayButton onClick={handleOverlayButtonClick}>
        <img src={EyeIcon} alt="" />
      </OverlayButton>
    </ImageWrapper>
  );
};

export default Image;
