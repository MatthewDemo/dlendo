import React from "react";
import "./DlendoRatingHeader.scss";
import FilledStar from "../../../../assets/img/dashboard-icons/project-details-icons/filled-star-icon.svg";
import UnfilledStar from "../../../../assets/img/dashboard-icons/project-details-icons/unfilled-star-icon.svg";
const DlendoRatingHeader = () => {
  return (
    <div className="dlendo-rating-header">
      <div className="rating-container">
        <div className="project-mark">15</div>
        <div className="project-star-container">
          <div className="five-stars-container">
            <img src={FilledStar} alt="" />
            <img src={FilledStar} alt="" />
            <img src={FilledStar} alt="" />
            <img src={FilledStar} alt="" />
            <img src={UnfilledStar} alt="" />
          </div>
          <div className="letter-mark">A</div>
        </div>
      </div>
      <div className="marks-container">
        <div className="dlendo-rating-mark">
          <span className="dlendo-rating-mark-letter e">E</span>
          <div className="dlendo-rating-mark-value-container">
            <span className="dlendo-rating-mark-value">0-3</span>
          </div>
        </div>
        <div className="dlendo-rating-mark">
          <span className="dlendo-rating-mark-letter d">D</span>
          <div className="dlendo-rating-mark-value-container">
            <span className="dlendo-rating-mark-value">4-7</span>
          </div>
        </div>
        <div className="dlendo-rating-mark">
          <span className="dlendo-rating-mark-letter c">C</span>
          <div className="dlendo-rating-mark-value-container">
            <span className="dlendo-rating-mark-value">8-11</span>
          </div>
        </div>
        <div className="dlendo-rating-mark">
          <span className="dlendo-rating-mark-letter b">B</span>
          <div className="dlendo-rating-mark-value-container">
            <span className="dlendo-rating-mark-value">11-14</span>
          </div>
        </div>
        <div className="dlendo-rating-mark">
          <span className="dlendo-rating-mark-letter a">A</span>
          <div className="dlendo-rating-mark-value-container">
            <span className="dlendo-rating-mark-value">15-20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DlendoRatingHeader;
