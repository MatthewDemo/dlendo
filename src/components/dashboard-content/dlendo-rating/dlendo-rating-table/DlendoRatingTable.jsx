import React from "react";
import "./DlendoRatingTable.scss";

const DlendoRatingTable = () => {
  const locationPoints = 1;
  const vacancyPoints = 3;
  const developmentStagePoints = 2;
  const trackRecordPoints = 2;
  const assetTypePoints = 0;
  const durationPoints = 1;
  const existingBankFinancingPoints = 3;
  const preSalesPoints = 2;
  const sum =
    locationPoints +
    vacancyPoints +
    developmentStagePoints +
    trackRecordPoints +
    assetTypePoints +
    durationPoints +
    existingBankFinancingPoints +
    preSalesPoints;
  return (
    <ul className="dlendo-rating-table">
      <li className="dlendo-rating-table-header">
        <span className="dlendo-rating-table-header-category">Category</span>
        <span className="dlendo-rating-table-header-assessment">
          Assessment
        </span>
        <span>Points</span>
      </li>

      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">Location</span>
        <span className="dlendo-rating-table-row-assessment">Primary</span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " + (locationPoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (locationPoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (locationPoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{locationPoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">Vacancy</span>
        <span className="dlendo-rating-table-row-assessment">Vacant</span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={"scale-circle " + (vacancyPoints >= 1 ? "filled" : "")}
            ></div>
            <div
              className={"scale-circle " + (vacancyPoints >= 2 ? "filled" : "")}
            ></div>
            <div
              className={"scale-circle " + (vacancyPoints >= 3 ? "filled" : "")}
            ></div>
          </div>
          <span className="scale-points">{vacancyPoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">
          Development Stage
        </span>
        <span className="dlendo-rating-table-row-assessment">
          New Construction
        </span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " + (developmentStagePoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (developmentStagePoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (developmentStagePoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{developmentStagePoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">Track Record</span>
        <span className="dlendo-rating-table-row-assessment">
          50-249 million developed
        </span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " + (trackRecordPoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (trackRecordPoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (trackRecordPoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{trackRecordPoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">Asset Type</span>
        <span className="dlendo-rating-table-row-assessment">Residential</span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " + (assetTypePoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (assetTypePoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (assetTypePoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{assetTypePoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">Duration</span>
        <span className="dlendo-rating-table-row-assessment">
          Up to 18 months
        </span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " + (durationPoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (durationPoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (durationPoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{durationPoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">
          Existing Bank Financing
        </span>
        <span className="dlendo-rating-table-row-assessment">Yes</span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " +
                (existingBankFinancingPoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " +
                (existingBankFinancingPoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " +
                (existingBankFinancingPoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{existingBankFinancingPoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-row">
        <span className="dlendo-rating-table-row-category">Pre Sales</span>
        <span className="dlendo-rating-table-row-assessment">20%</span>
        <div className="scale-container">
          <div className="scale-circle-container">
            <div
              className={
                "scale-circle " + (preSalesPoints >= 1 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (preSalesPoints >= 2 ? "filled" : "")
              }
            ></div>
            <div
              className={
                "scale-circle " + (preSalesPoints >= 3 ? "filled" : "")
              }
            ></div>
          </div>
          <span className="scale-points">{preSalesPoints}</span>
        </div>
      </li>
      <li className="dlendo-rating-table-footer">
        <span>Total:</span>
        <span>{sum}</span>
      </li>
    </ul>
  );
};

export default DlendoRatingTable;
