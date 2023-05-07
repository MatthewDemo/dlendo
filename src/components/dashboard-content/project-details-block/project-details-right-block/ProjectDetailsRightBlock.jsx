import React, { useState } from "react";
import "./ProjectDetailsRightBlock.scss";
import { useSelector } from "react-redux";
import ProgressBar from "../../../main/projects/Card/progressBar/ProgressBar";
import HotButton from "../../../main/projects/Card/buttons/hot-button/HotButton";
import NewButton from "../../../main/projects/Card/buttons/new-button/NewButton";
import CompareButton from "../../../main/projects/Card/buttons/compare-button/CompareButton";
import ReturnTermBlock from "../../../main/projects/Card/return-term-block/ReturnTermBlock";
import LocationIcon from "../../../../assets/img/projects/location-icon.svg";
import DistributionIcon from "../../../../assets/img/projects/distribution-icon.svg";
import RatingComponent from "./rating-component/RatingComponent";
import CallBackPopup from "./callback-popup/CallBackPopup";

const ProjectDetailsRightBlock = ({ activeIndex }) => {
  const allHouses = useSelector((state) => state.house.allHouses);

  const [isCallbackPopupOpen, setIsCallbackPopupOpen] = useState(false);
  const [isFirstInvestPopupOpen, setIsFirstInvestPopupOpen] = useState(false);
  const [isSecondInvestPopupOpen, setIsSecondInvestPopupOpen] = useState(false);

  const toggleCallbackPopup = () => {
    setIsCallbackPopupOpen(!isCallbackPopupOpen);
  };
  const toggleFirstInvestPopup = () => {
    setIsFirstInvestPopupOpen(!isFirstInvestPopupOpen);
  };
  const toggleSecondInvestPopup = () => {
    setIsSecondInvestPopupOpen(!isSecondInvestPopupOpen);
  };

  return (
    <div className="dashboard-project-details-right-container">
      <RatingComponent />
      <div className="project-details-buttons-wrapper">
        <HotButton />
        <NewButton />
        <CompareButton />
      </div>
      <div className="project-details-progressbar-container">
        <ProgressBar card={allHouses[activeIndex]} />
      </div>
      <div className="project-details-return-term-container">
        <ReturnTermBlock card={allHouses[activeIndex]} />
      </div>

      <table className="project-details-location-distribution-container">
        <tbody>
          <tr>
            <td>
              <img src={LocationIcon} alt="" />
            </td>
            <td>
              <span className="location-text">Location</span>
            </td>
            <td>
              <p className="city">{allHouses[activeIndex].location}</p>
            </td>
          </tr>
          <tr>
            <td>
              <img src={DistributionIcon} alt="" />
            </td>
            <td>
              <span>Distribution</span>
            </td>
            <td>
              <p>{allHouses[activeIndex].distribution}</p>
            </td>
          </tr>
          <tr>
            <td>
              <img src={DistributionIcon} alt="" />
            </td>
            <td>
              <span className="nonowrap">Payment method</span>
            </td>
            <td>
              <p>Qualified Subordinated Loan</p>
            </td>
          </tr>
          <tr>
            <td>
              <img src={DistributionIcon} alt="" />
            </td>
            <td>
              <span>Issuer</span>
            </td>
            <td>
              <p>Alberchtstrabe 335. Project GmbH</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="project-details-botton-buttons-container">
        <button className="call-back-button" onClick={toggleCallbackPopup}>
          Call back
        </button>
        <button className="invest-button" onClick={toggleFirstInvestPopup}>
          Invest now
        </button>
      </div>

      {isCallbackPopupOpen && (
        <CallBackPopup toggleCallbackPopup={toggleCallbackPopup} />
      )}
      {isFirstInvestPopupOpen && (
        <div className="first-invest-popup-background">
          <div className="first-invest-popup-container">
            <h2>First invest Popup Title</h2>
            <p>Popup content goes here</p>
            <button onClick={toggleFirstInvestPopup}>Close</button>
            <button
              onClick={() => {
                setIsFirstInvestPopupOpen(false);
                setIsSecondInvestPopupOpen(true);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {isSecondInvestPopupOpen && (
        <div className="second-invest-popup-background">
          <div className="second-invest-popup-container">
            <h2>Second invest Popup Title</h2>
            <p>Popup content goes here</p>
            <button onClick={toggleSecondInvestPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsRightBlock;
