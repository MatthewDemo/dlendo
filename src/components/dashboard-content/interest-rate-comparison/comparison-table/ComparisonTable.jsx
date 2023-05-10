import React from "react";
import "./ComparisonTable.scss";

const ComparisonTable = ({loanAmountValue}) => {
const interestRate = 3.75;
const DeutscheBankLoanRate = 2.55;
const CommerzbankLoanRate = 2.95;
const BankgruppeLoanRate = 1.90
const DlendoLoanRate = 1.2;
  return (
    <div class="table-container">
      <div class="table-header">
        <div>Bank name</div>
        <div>Interest rate</div>
        <div>Loan rate</div>
        <div>Profit margin (%)</div>
        <div>Profit margin (€)</div>
      </div>
      <div class="table-row">
        <div className="table-bank-name">Deutsche Bank</div>
        <div className="table-rate">{interestRate} %</div>
        <div className="table-rate">{DeutscheBankLoanRate.toFixed(2)} %</div>
        <div className="table-profit">
          {" "}
          <div className="profit-color-box">{(interestRate - DeutscheBankLoanRate).toFixed(2)} %</div>{" "}
        </div>
        <div className="table-profit">
          <div className="profit-color-box">€ {((loanAmountValue * (interestRate - DeutscheBankLoanRate).toFixed(2))/100).toFixed(2)}</div>
        </div>
      </div>
      <div class="table-row">
        <div className="table-bank-name">Commerzbank</div>
        <div className="table-rate">{interestRate} %</div>
        <div className="table-rate">{CommerzbankLoanRate.toFixed(2)} %</div>
        <div className="table-profit">
          <div className="profit-color-box">{(interestRate - CommerzbankLoanRate).toFixed(2)} %</div>
        </div>
        <div className="table-profit">
          <div className="profit-color-box">€ {((loanAmountValue * (interestRate - CommerzbankLoanRate).toFixed(2))/100).toFixed(2)}</div>
        </div>
      </div>
      <div class="table-row">
        <div className="table-bank-name">KFW Bankgruppe</div>
        <div className="table-rate">{interestRate} %</div>
        <div className="table-rate">{BankgruppeLoanRate.toFixed(2)} %</div>
        <div className="table-profit">
          <div className="profit-color-box">{(interestRate - BankgruppeLoanRate).toFixed(2)} %</div>
        </div>
        <div className="table-profit">
          <div className="profit-color-box">€ {((loanAmountValue * (interestRate - BankgruppeLoanRate).toFixed(2))/100).toFixed(2)}</div>
        </div>
      </div>
      <div class="table-row">
        <div className="table-bank-name">Dlendo</div>
        <div className="table-rate">{interestRate} %</div>
        <div className="table-rate">{DlendoLoanRate.toFixed(2)} %</div>
        <div className="table-profit">
          <div className="profit-color-box">{(interestRate - DlendoLoanRate).toFixed(2)} %</div>
        </div>
        <div className="table-profit">
          <div className="profit-color-box">€ {((loanAmountValue * (interestRate - DlendoLoanRate).toFixed(2))/100).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
