import React from "react";
import "./InterestRate.scss";
import DlendoRate from "./dlendo-rate-container/DlendoRate";

const InterestRate = () => {
  return (
    <div className="interest-rate-comparison-block">
      <span className="interest-rate-block-title">
        Interest rate comparison
      </span>
      <DlendoRate />
      <div className="loan-amount-container">
        <span>Loan amount</span>
        <div className="loan-amount-input-container">
            <span>€</span>
            <input type="text" placeholder="0.00"/>
        </div>
      </div>
    </div>
  );
};

export default InterestRate;
