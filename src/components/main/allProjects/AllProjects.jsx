import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AllProjects.scss";
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
import AllProjectsCards from "./allProjectsCards/AllProjectsCards";
import AllProjectsFooter from "./allProjectsFooter/AllProjectsFooter";

const AllProjects = () => {
  const [cardsToShow, setCardsToShow] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const allHouses = useSelector((state) => state.house.allHouses);

  const handleShowMore = () => {
    if (currentPage == 1) {
      setCardsToShow(cardsToShow + 8);
    } else {
      setCurrentPage(1);
      setCardsToShow(cardsToShow + 8);
    }
  };

  const firstCardIndex = (currentPage - 1) * cardsToShow;
  const lastCardIndex = Math.min(currentPage * cardsToShow, allHouses.length);
  const cardsOnCurrentPage = allHouses.slice(firstCardIndex, lastCardIndex);

  return (
    <div className="all-projects-block">
      <p className="all-projects-header-text">All projects</p>
      <div className="filter-sort-block">
        <Filter />
        <div className="sort-block">
          <p>Sort by:</p>
          <Sort />
        </div>
      </div>
      <AllProjectsCards cardsToShow={cardsToShow} cards={cardsOnCurrentPage} />
      <AllProjectsFooter
        onShowMore={handleShowMore}
        cardsToShow={cardsToShow}
        allCardsToShow={allHouses.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AllProjects;
