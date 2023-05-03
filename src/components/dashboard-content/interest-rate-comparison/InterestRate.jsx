import React from "react";
import "./InterestRate.scss";
import DlendoRate from "./dlendo-rate-container/DlendoRate";
import LoanAmount from "./loan-amount-container/LoanAmount";
import ComparisonTable from "./comparison-table/ComparisonTable";

const InterestRate = () => {
  return (
    <div className="interest-rate-comparison-block">
      <span className="interest-rate-block-title">
        Interest rate comparison
      </span>
      <DlendoRate />
      <LoanAmount />
      <ComparisonTable />
    </div>
  );
};

export default InterestRate;
