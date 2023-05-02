import React from "react";
import "./ProjectDetailsRightBlock.scss";
import { useSelector } from "react-redux";
import ProgressBar from "../../../main/projects/Card/progressBar/ProgressBar";
import HotButton from "../../../main/projects/Card/buttons/hot-button/HotButton";
import NewButton from "../../../main/projects/Card/buttons/new-button/NewButton";
import CompareButton from "../../../main/projects/Card/buttons/compare-button/CompareButton";
import FilledStar from "../../../../assets/img/dashboard-icons/project-details-icons/filled-star-icon.svg";
import UnfilledStar from "../../../../assets/img/dashboard-icons/project-details-icons/unfilled-star-icon.svg";
import ReturnTermBlock from "../../../main/projects/Card/return-term-block/ReturnTermBlock";
import LocationIcon from "../../../../assets/img/projects/location-icon.svg";
import DistributionIcon from "../../../../assets/img/projects/distribution-icon.svg";

const ProjectDetailsRightBlock = ({ activeIndex }) => {
  const allHouses = useSelector((state) => state.house.allHouses);

  return (
    <div className="dashboard-project-details-right-container">
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
        <button className="call-back-button">Call back</button>
        <button className="invest-button">Invest now</button>
      </div>
    </div>
  );
};

export default ProjectDetailsRightBlock;
