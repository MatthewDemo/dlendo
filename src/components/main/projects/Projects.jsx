import React, { useState } from "react";
import './Projects.scss'
import LeftArrow from "../../../assets/img/main-header-icons/left-arrow.svg";
import RightArrow from "../../../assets/img/main-header-icons/right-arrow.svg";
import Card from "./Card/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 80px;
//   background-color: #090b32;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//   padding: 0 30px;
// `;

// const ButtonsWrapper = styled.div`
//   display: flex;
// `;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  line-height: 29.9px;
  font-weight: 700;
  color: ${(props) => (props.active ? "#FA544D" : "#8186AF")};
  margin-right: 20px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: calc(100% + 10px);
    height: ${(props) => (props.active ? "2px" : "0")};
    background-color: #fa544d;
  }
`;

// const SwitchWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const SwitchButton = styled.button`
//   border: none;
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   background-color: #1e2044;
//   border: 1px solid #323054;
//   font-size: 12px;
//   font-weight: 700;
//   line-height: 29.9px;
//   color: #fa544d;
//   margin: 0 10px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const PageNumber = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 29.9px;
  font-weight: 700;
  color: #ffffff;
`;
const CardsWrapper = styled.div`
  display: flex;
`;

const Projects = () => {
  const [activeButton, setActiveButton] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const allHouses = useSelector((state) => state.house.allHouses);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allHouses.slice(indexOfFirstCard, indexOfLastCard);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setCurrentPage(1);
  };

  const handleSwitchButtonClick = (direction) => {
    const totalPages = Math.ceil(allHouses.length / cardsPerPage);
    if (direction === "left") {
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
    } else if (direction === "right") {
      setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
    }
  };

  return (
    <div>
      <div className="main-page-projects-header">
        <div className="main-page-projects-buttons-wrapper"> 
          <Button
            active={activeButton === "new"}
            onClick={() => handleButtonClick("new")}
          >
            New projects
          </Button>
          <Button
            active={activeButton === "hot"}
            onClick={() => handleButtonClick("hot")}
          >
            Hot projects
          </Button>
        </div>
        <div className="main-page-projects-switch-wrapper">
          <button className="main-page-projects-switch-button" onClick={() => handleSwitchButtonClick("left")}>
            <img src={LeftArrow} alt="" />
          </button>
          <PageNumber>
            {currentPage}/{Math.ceil(allHouses.length / cardsPerPage)}
          </PageNumber>
          <button className="main-page-projects-switch-button" onClick={() => handleSwitchButtonClick("right")}>
            <img src={RightArrow} alt="" />
          </button>
        </div>
      </div>
      <CardsWrapper>
        {currentCards.map((card) => (
          <Card card={card} />
        ))}
      </CardsWrapper>
    </div>
  );
};

export default Projects;
