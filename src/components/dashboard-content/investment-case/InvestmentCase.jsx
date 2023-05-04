import React from "react";
import "./InvestmentCase.scss";
import HighlightArrow from "../../../assets/img/dashboard-icons/deal-highlight-icons/deal-highlight-image.svg";

const InvestmentCase = () => {
  return (
    <div className="investment-case-block">
      <span className="investment-case-block-title">Investment case</span>
      <p>
        For the purpose of partial financing, IME GmbH intends to take up
        qualified subordinated loans of a maximum of € 1,000,000.
      </p>
      <p>
        The borrower is the owner of the property with the address Schillergasse
        6-8 in 2351 Wiener Neudorf. A total of 63 residential units with a
        weighted usable residential area of 2,200 sqm and 63 underground parking
        spaces will be realised. The properties have been acquired, the planning
        phase has been completed and the building permit has already been
        issued. Construction is scheduled to start in May 2020. It is expected
        that construction work will be completed by summer 2022.
      </p>
      <ul>
        <li>
          <img src={HighlightArrow} alt="" className="investment-case-image" />
          <span className="investment-case-title">
            Yearly distribution: <br />
            <p className="investment-case-text">
              During the term, the lender receives of 7% per year.
            </p>
          </span>
        </li>
        <li>
          <img src={HighlightArrow} alt="" className="investment-case-image" />
          <span className="investment-case-title">
            Private garden areas <br />
            <p className="investment-case-text">
              The lender receives his invested capital back after the sale of
              the apartments. According to the plan, this should take place
              after 30 months at the latest.
            </p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InvestmentCase;
