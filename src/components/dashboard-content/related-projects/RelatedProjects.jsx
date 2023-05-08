import React, { useState } from "react";
import './RelatedProjects.scss'
import LeftArrow from "../../../assets/img/main-header-icons/left-arrow.svg";
import RightArrow from "../../../assets/img/main-header-icons/right-arrow.svg";
import Card from "../../main/projects/Card/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PageNumber = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 29.9px;
  font-weight: 700;
  color: #ffffff;
`;

const RelatedProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const allHouses = useSelector((state) => state.house.allHouses);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allHouses.slice(indexOfFirstCard, indexOfLastCard);


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
      <div className="dashboard-related-projects-header">
        <p className="related-projects-title">Related projects</p>
        <div className="dashboard-related-projects-switch-wrapper">
          <button
            className="dashboard-related-projects-switch-button"
            onClick={() => handleSwitchButtonClick("left")}
          >
            <img src={LeftArrow} alt="" />
          </button>
          <PageNumber>
            {currentPage}/{Math.ceil(allHouses.length / cardsPerPage)}
          </PageNumber>
          <button
            className="dashboard-related-projects-switch-button"
            onClick={() => handleSwitchButtonClick("right")}
          >
            <img src={RightArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="related-projects-cards-wrapper">
        {currentCards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
