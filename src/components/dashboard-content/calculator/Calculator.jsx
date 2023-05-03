import React, { useState } from "react";
import "./Calculator.scss";
import CalculatorLines from "../../../assets/img/dashboard-icons/calculator icons/calculator-lines.svg";

const Calculator = () => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(100000);

  const handleSliderChange = (e) => {
    setCurrentAmount(e.target.value);
  };

  return (
    <div className="dashboard-calculator">
      <span className="dashboard-item-title">Calculator</span>
      <div className="calculator-percentage">
        <div className="zero-percent">
          <span>0%</span>
        </div>
        <div className="calculator-current-amount">€{currentAmount}</div>
        <div className="hundred-percent">
          <span>€{maxAmount}</span>
        </div>
      </div>
      <div className="calculator-input-range">
        <input
          type="range"
          min="0"
          max={maxAmount}
          value={currentAmount}
          onChange={handleSliderChange}
          style={{ "--slider-value": currentAmount, "--slider-max": maxAmount }}
        />
      </div>
      <div className="calculator-lines">
        <img src={CalculatorLines} alt="" />
      </div>
    </div>
  );
};

export default Calculator;
