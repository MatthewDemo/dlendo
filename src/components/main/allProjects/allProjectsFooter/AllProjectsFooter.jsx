import React from "react";
import "./AllProjectsFooter.scss";
import LeftArrow from "../../../../assets/img/all-projects-block/all-projects-footer-left-arrow.svg";
import RightArrow from "../../../../assets/img/all-projects-block/all-projects-footer-right-arrow.svg";

const AllProjectsFooter = () => {
  return (
    <div className="all-projects-footer-wrapper">
      <button className="footer-load-more-button">
        Load more projects (0)
      </button>
      <div className="all-projects-pagination-block">
        <div className="left-button">
          <button className="left-arrow">
            <img src={LeftArrow} alt="" />
          </button>
        </div>
        <div className="pages">
          <button className="page">1</button>
        </div>
        <div className="right-button">
          <button className="right-arrow">
            <img src={RightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsFooter;
