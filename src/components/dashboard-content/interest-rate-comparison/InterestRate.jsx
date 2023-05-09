import React, {useState} from "react";
import "./InterestRate.scss";
import DlendoRate from "./dlendo-rate-container/DlendoRate";
import LoanAmount from "./loan-amount-container/LoanAmount";
import ComparisonTable from "./comparison-table/ComparisonTable";

const InterestRate = () => {
const [loanAmountValue, setLoanAmountValue] = useState(0)

  return (
    <div className="interest-rate-comparison-block">
      <span className="interest-rate-block-title" id="interest-rate-comparison-block">
        Interest rate comparison
      </span>
      <DlendoRate />
      <LoanAmount loanAmountValue={loanAmountValue} setLoanAmountValue={setLoanAmountValue}/>
      <ComparisonTable loanAmountValue={loanAmountValue}/>
    </div>
  );
};

export default InterestRate;
