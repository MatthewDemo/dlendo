import React from "react";
import "./DealHighlights.scss";
import HighlightArrow from "../../../assets/img/dashboard-icons/deal-highlight-icons/deal-highlight-image.svg";

const DealHighlights = () => {
  return (
    <div className="deal-highlights-block">
      <span className="deal-highlights-block-title" id="deal-highlights-block">Deal highlights</span>
      <ul>
        <li>
          <img src={HighlightArrow} alt="" className="deal-highlight-image" />
          <span className="deal-highlight-title">
            Project development <br />
            <p className="deal-highlight-text">
              Project is a development property in 1220 Vienna, with a total
              area of 2,660 m². Within the next 30 months the project is to be
              made ready for construction and then sold to a property developer.
            </p>
          </span>
        </li>
        <li>
          <img src={HighlightArrow} alt="" className="deal-highlight-image" />
          <span className="deal-highlight-title">
            Total living space <br />
            <p className="deal-highlight-text">
              According to current planning, it is expected that 36 residential
              units with a total living space of 2,527 sqm and a weighted total
              usable space of 2,717 sqm can be built on the property.
            </p>
          </span>
        </li>
        <li>
          <img src={HighlightArrow} alt="" className="deal-highlight-image" />
          <span className="deal-highlight-title">
            Private garden areas <br />
            <p className="deal-highlight-text">
              The size of the efficiently cut residential units is between 47
              and 110 m². In addition, there are many terraces of up to 15 m²
              and private garden areas of up to 208 m² for all ground floor
              apartments. In addition, a children's playground.
            </p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DealHighlights;
