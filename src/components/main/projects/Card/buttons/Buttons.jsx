import React from 'react'
import RightCircleButton from "../../../../../assets/img/projects/right-circle-button.svg";
import NewIcon from "../../../../../assets/img/projects/new-icon.svg";
import styled from "styled-components";


const ButtonWrapper = styled.div`
  margin: -15px 24px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 1;
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
const Buttons = () => {
  return (
    <ButtonWrapper>
        <CircleButton>
          <img src={NewIcon} alt="" />
        </CircleButton>
        <CircleButton>
          <img src={RightCircleButton} alt="" />
        </CircleButton>
      </ButtonWrapper>
  )
}

export default Buttons
