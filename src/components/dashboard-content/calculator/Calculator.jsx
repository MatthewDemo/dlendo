import React, { useState } from "react";
import "./Calculator.scss";
import CalculatorLines from "../../../assets/img/dashboard-icons/calculator icons/calculator-lines.svg";
import InputRange from "./input-range/InputRange";
import CalculatorHeader from "./calculator-header/CalculatorHeader";
import CalculatorOptions from "./calculator-options/CalculatorOptions";

const Calculator = () => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const maxAmount = 100000
  const [dlendoInstantInterest, setDlendoInstantInterest] = useState(0);
  const interest = 8;


  return (
    <div className="dashboard-calculator">
      <span className="dashboard-item-title" id="calculator-block">Calculator</span>
      <CalculatorHeader currentAmount={currentAmount} maxAmount={maxAmount} />
      <InputRange
        currentAmount={currentAmount}
        maxAmount={maxAmount}
        setCurrentAmount={setCurrentAmount}
      />
      <div className="calculator-lines">
        <img src={CalculatorLines} alt="" />
      </div>
      <CalculatorOptions
        interest={interest}
        dlendoInstantInterest={dlendoInstantInterest}
      />
      <button
        className="calculate-button"
        onClick={() =>
          setDlendoInstantInterest(currentAmount * interest * 0.01)
        }
      >
        Calculate
      </button>
    </div>
  );
};

export default Calculator;
