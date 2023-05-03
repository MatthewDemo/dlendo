import React from "react";
import "./CalculatorOptions.scss";
import LoanIcon from "../../../../assets/img/dashboard-icons/calculator icons/loan-amount-icon.svg";
import ReturnIcon from "../../../../assets/img/dashboard-icons/calculator icons/return-icon.svg";
import InterestIcon from "../../../../assets/img/dashboard-icons/calculator icons/interest-icon.svg";
import DurationIcon from "../../../../assets/img/dashboard-icons/calculator icons/duration-icon.svg";
import DlendoInstantInterestIcon from "../../../../assets/img/dashboard-icons/calculator icons/dlendo-instant-interest-icon.svg";

const CalculatorOptions = ({interest, dlendoInstantInterest}) => {
  return (
    <div className="calculator-options">
      <div className="row-options-container">
        <div className="calculator-option">
          <span>Loan amount</span>
          <div className="calculator-option-img-container">
            <img src={LoanIcon} alt="" />
          </div>
          <p>8% p.a.</p>
        </div>
        <div className="calculator-option">
          <span>Return</span>
          <div className="calculator-option-img-container">
            <img src={ReturnIcon} alt="" />
          </div>
          <p>8% p.a.</p>
        </div>
      </div>
      <div className="row-options-container">
        <div className="calculator-option">
          <span>Interest</span>
          <div className="calculator-option-img-container">
            <img src={InterestIcon} alt="" />
          </div>
          <p>{interest}% p.a.</p>
        </div>
        <div className="calculator-option">
          <span>Duration</span>
          <div className="calculator-option-img-container">
            <img src={DurationIcon} alt="" />
          </div>
          <p>6 months.</p>
        </div>
      </div>
      <div className="dlendo-instant-interest">
        <span>Dlendo instant interest</span>
        <div className="calculator-option-img-container">
          <img src={DlendoInstantInterestIcon} alt="" />
        </div>
        <p>{Math.round(dlendoInstantInterest)}</p>
      </div>
    </div>
  );
};

export default CalculatorOptions;
