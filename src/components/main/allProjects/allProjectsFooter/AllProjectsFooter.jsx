import React from "react";
import "./AllProjectsFooter.scss";
import LeftArrow from "../../../../assets/img/all-projects-block/all-projects-footer-left-arrow.svg";
import RightArrow from "../../../../assets/img/all-projects-block/all-projects-footer-right-arrow.svg";

const AllProjectsFooter = ({
  onShowMore,
  cardsToShow,
  allCardsToShow,
  currentPage,
  setCurrentPage,
}) => {
  const remainingCards = allCardsToShow - cardsToShow;

  const handleNextPage = () => {
    if (remainingCards > 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="all-projects-footer-wrapper">
      {remainingCards >= 0 ? (
        <button className="footer-load-more-button" onClick={onShowMore}>
          Load more projects ({remainingCards})
        </button>
      ) : (
        <button className="footer-load-more-button" onClick={onShowMore}>
          Load more projects (0)
        </button>
      )}
      <div className="all-projects-pagination-block">
        <div className="left-button">
          <button className="left-arrow" onClick={handlePrevPage}>
            <img src={LeftArrow} alt="" />
          </button>
        </div>
        <div className="pages">
          <button className="page">{currentPage}</button>
        </div>
        <div className="right-button">
          <button className="right-arrow" onClick={handleNextPage}>
            <img src={RightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsFooter;
