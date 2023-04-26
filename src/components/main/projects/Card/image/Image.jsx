import React, { useState } from "react";
import LeftWhiteArrow from "../../../../../assets/img/projects/left-white-arrow.svg";
import RightWhiteArrow from "../../../../../assets/img/projects/right-white-arrow.svg";
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


const Image = ({card}) => {
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
  );
};

export default Image;
