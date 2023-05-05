import React from "react";
import "./FinanceStructure.scss";
import ChartCircle from "../../../assets/img/dashboard-icons/finance-structure/chart-circle.svg";

const FinanceStructure = () => {
  return (
    <div className="finance-structure-block">
      <span className="finance-structure-block-title" id="finance-structure-block">Finance structure</span>
      <div className="finance-structure-left-container">
        <ul>
          <li>
            <div className="finance-structure-number">1</div>
            <div className="finance-structure-info">
              <span className="finance-structure-info-name">Bank loan</span>
              <span className="finance-structure-info-price">€ 6,530,000</span>
            </div>
          </li>
          <li>
            <div className="finance-structure-number">2</div>
            <div className="finance-structure-info">
              <span className="finance-structure-info-name">
                Crowdinvesting
              </span>
              <span className="finance-structure-info-price">€ 1,000,000</span>
            </div>
          </li>
          <li>
            <div className="finance-structure-number">3</div>
            <div className="finance-structure-info">
              <span className="finance-structure-info-name">Equity</span>
              <span className="finance-structure-info-price">€ 790,000</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="finance-structure-right-container">
        <img src={ChartCircle} alt="" />
        <div className="finance-structure-right-container-info">
          <span className="finance-structure-right-container-info-text">
            Gesamt:
          </span>
          <span className="finance-structure-right-container-info-price">
            €8,320,000
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinanceStructure;
