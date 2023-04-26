import React from "react";
import "./LocationDistributionBlock.scss";
import LocationIcon from "../../../../../assets/img/projects/location-icon.svg";
import DistributionIcon from "../../../../../assets/img/projects/distribution-icon.svg";

const LocationDistributionBlock = ({ card }) => {
  return (
    <table className="location-distribution-container">
      <tbody>
        <tr>
          <td>
            <img src={LocationIcon} alt="" />
          </td>
          <td>
            <span className="location-text">Location</span>
          </td>
          <td>
            <p className="city">{card.location}</p>
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
            <p>{card.distribution}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LocationDistributionBlock;
