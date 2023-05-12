import React, { useState } from "react";
import './Projects.scss'
import LeftArrow from "../../../assets/img/main-header-icons/left-arrow.svg";
import RightArrow from "../../../assets/img/main-header-icons/right-arrow.svg";
import Card from "./Card/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

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

const PageNumber = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 29.9px;
  font-weight: 700;
  color: #ffffff;
`;

const Projects = ({isMobile}) => {
  const [activeButton, setActiveButton] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  var cardsPerPage = 0;
  {isMobile ?  cardsPerPage = 1 :  cardsPerPage = 4;}
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
    <div className="projects-block">
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
      <div className="cards-wrapper">
        {currentCards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
