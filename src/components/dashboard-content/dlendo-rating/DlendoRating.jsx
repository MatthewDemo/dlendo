import React from "react";
import "./DlendoRating.scss";
import DlendoRatingHeader from "./dlendo-rating-header/DlendoRatingHeader";
import DlendoRatingTable from "./dlendo-rating-table/DlendoRatingTable";

const DlendoRating = () => {
  return (
    <div className="dlendo-rating-block">
      <span className="dlendo-rating-block-title">Dlendo rating</span>
      <DlendoRatingHeader />
      <DlendoRatingTable />
      <p>
        <span>Dlendo Ratings</span> are for informational purposes only. Real
        estate projects may fail. In the worst case, even the total loss of the
        invested capital can occur. You should therefore only invest funds you
        can afford to lose. Moreover, funds should be spread across various
        projects (diversification). Please note the respective documents for
        each project as well as the Risk Notice.
      </p>
    </div>
  );
};

export default DlendoRating;
