import React, { useState } from "react";
import './ProjectDetailsLeftBlock.scss'
import ShareIcon from "../../../../assets/img/dashboard-icons/project-details-icons/dashboard-project-details-share-button-icon.svg";
import PdfIcon from "../../../../assets/img/dashboard-icons/project-details-icons/dashboard-project-details-pdf-button-icon.svg";
import PrintIcon from "../../../../assets/img/dashboard-icons/project-details-icons/dashboard-project-details-print-button-icon.svg";
import InfoIcon from "../../../../assets/img/dashboard-icons/project-details-icons/dashboard-project-details-instant-info-icon.svg";
import LeftWhiteArrow from "../../../../assets/img/projects/left-white-arrow.svg";
import RightWhiteArrow from "../../../../assets/img/projects/right-white-arrow.svg";
import { useSelector } from "react-redux";

const ProjectDetailsLeftBlock = ({ activeIndex, setActiveIndex }) => {
  const allHouses = useSelector((state) => state.house.allHouses);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleRightButtonClick = () => {
    if (activePhotoIndex < allHouses[activeIndex].photos.length - 1) {
      setActivePhotoIndex(activePhotoIndex + 1);
    } else {
      setActivePhotoIndex(0);
    }
  };
  const handleLeftButtonClick = () => {
    if (activePhotoIndex > 0) {
      setActivePhotoIndex(activePhotoIndex - 1);
    } else {
      setActivePhotoIndex(allHouses[activeIndex].photos.length - 1);
    }
  };
  return (
    <div className="dashboard-project-details-left-container">
      <div className="house-info-container">
        <div className="dashboard-project-details-buttons">
          <button
            className="dashboard-project-details-left-button"
            onClick={handleLeftButtonClick}
          >
            <img src={LeftWhiteArrow} alt="" />
          </button>
          <button
            className="dashboard-project-details-right-button"
            onClick={handleRightButtonClick}
          >
            <img src={RightWhiteArrow} alt="" />
          </button>
        </div>
        <img
          className="house-image"
          src={
            allHouses[activeIndex].photos[activePhotoIndex]
              ? allHouses[activeIndex].photos[activePhotoIndex]
              : allHouses[activeIndex].photos[0]
          }
          alt="House"
        />
        <div className="house-buttons-row">
          <div className="house-buttons-container">
            {allHouses.map((house, index) => (
              <div
                key={index}
                className={`house-button ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <span>{`${activeIndex + 1}/${allHouses.length}`}</span>
          </div>
          <div className="house-info-buttons-container">
            <div className="house-info-button">
              <img src={ShareIcon} alt="share" />
            </div>
            <div className="house-info-button">
              <img src={PdfIcon} alt="pdf" />
            </div>
            <div className="house-info-button">
              <img src={PrintIcon} alt="print" />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-project-details-adress-info">
        <span>{allHouses[activeIndex].address}</span>
        <div className="instant-interest">
          <p>Instant interest</p>

          <button className="instant-interest-button">
            <img src={InfoIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsLeftBlock;
