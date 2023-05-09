import React from "react";
import "./LoanAmount.scss";

const LoanAmount = ({ loanAmountValue, setLoanAmountValue }) => {
  return (
    <div className="loan-amount-container">
      <span>Loan amount</span>
      <div className="loan-amount-input-container">
        <span>€</span>
        <input type="text" placeholder="0.00" value={loanAmountValue} onChange={e=> setLoanAmountValue(e.target.value)}/>
      </div>
    </div>
  );
};

export default LoanAmount;
