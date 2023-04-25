import React, { useState } from "react";
import LeftWhiteArrow from "../../../../assets/img/projects/left-white-arrow.svg";
import RightWhiteArrow from "../../../../assets/img/projects/right-white-arrow.svg";
import styled from "styled-components";
import Home1 from "../../../../assets/img/houses/home1.svg";

const CardWrapper = styled.div`
  width: 255px;
  height: 460px;
  background-color: #15173c;
  border: 1px solid #26264a;
  margin-left: 15px;
`;

const ImageWrapper = styled.div`

  height: 196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  bottom: 0;
  left: 0;
  right: 0;
`;

const Button = styled.button`
  width: 30px;
  height: 28px;
  border: none;
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

const Card = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const allCards = [
    {
      photos: [Home1],
      address: "Alberchtstrabe 335",
      alreadyFunded: 425000,
      totalPrice: 847000,
      return: "8% p.a.",
      term: "24 month",
      location: "Germany",
      distribution: "Yearly",
      description:
        "Für die Ausführung gelten die zum Zeitpunkt des Bauantrages….",
    },
  ];
  const { photos, address } = allCards[0];

  const handleLeftButtonClick = () => {
    if (activePhoto > 0) {
      setActivePhoto(activePhoto - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (activePhoto < photos.length - 1) {
      setActivePhoto(activePhoto + 1);
    }
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <LeftButton onClick={handleLeftButtonClick}>
          <img src={LeftWhiteArrow} alt="" />
        </LeftButton>
        <Image src={photos[activePhoto]} alt="" />
        <RightButton onClick={handleRightButtonClick}>
          <img src={RightWhiteArrow} alt="" />
        </RightButton>
        <AddressWrapper>{address}</AddressWrapper>
      </ImageWrapper>
    </CardWrapper>
  );
};

export default Card;
