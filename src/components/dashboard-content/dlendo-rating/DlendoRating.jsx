import React from "react";
import "./DlendoRating.scss";

import DlendoRatingHeader from "./dlendo-rating-header/DlendoRatingHeader";

const DlendoRating = () => {
  return (
    <div className="dlendo-rating-block">
      <span className="dlendo-rating-block-title">Dlendo rating</span>
      <DlendoRatingHeader />
    </div>
  );
};

export default DlendoRating;
