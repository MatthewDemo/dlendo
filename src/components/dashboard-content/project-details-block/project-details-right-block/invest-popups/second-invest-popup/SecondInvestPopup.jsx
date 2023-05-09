import React, { useState, useEffect } from "react";
import "./SecondInvestPopup.scss";
import PopupHeaderLogo from "../../../../../../assets/img/popup-images/popup-header-logo.svg";
import PopupCloseImage from "../../../../../../assets/img/popup-images/popup-close-button-image.svg";
import AmountImage from "../../../../../../assets/img/popup-images/invest-popup-icons/second-invest-popup-amount-icon.svg";

const SecondInvestPopup = ({ toggleSecondInvestPopup }) => {
  const [currentEuroAmount, setCurrentEuroAmount] = useState(0);
  const [currentBtcAmount, setCurrentBtcAmount] = useState(0);
  const currentRate = 0.00004;

  useEffect(() => {
    setCurrentBtcAmount((currentEuroAmount * currentRate).toFixed(6));
  }, [currentEuroAmount]);

  return (
    <div className="second-invest-popup-background">
      <div className="second-invest-popup-container">
        <div className="second-invest-popup-header">
          <img src={PopupHeaderLogo} alt="" />
          <button onClick={toggleSecondInvestPopup}>
            <img src={PopupCloseImage} alt="" />
          </button>
        </div>
        <h1>Investment</h1>

        <div className="second-invest-popup-investment-amount-container">
          <span className="second-invest-popup-input-title">
            Investment amount
          </span>
          <div className="second-invest-popup-content">
            <div className="second-invest-popup-second-column-image-container">
              <img src={AmountImage} alt="" />
            </div>
            <div className="amount-input-container">
              <input
                type="number"
                placeholder="Enter amount of investment"
                onChange={(e) => setCurrentEuroAmount(e.target.value)}
              />
              <span>{currentBtcAmount} BTC</span>
            </div>
          </div>
        </div>

        <ul className="second-invest-popup-list">
          <li className="second-invest-popup-list-item">
            <span className="second-invest-popup-first-column">
              Crypto rate
            </span>
            <span className="second-invest-popup-second-column">
              €1.00={currentRate} BTC
            </span>
          </li>
          <li className="second-invest-popup-list-item">
            <span className="second-invest-popup-first-column">Amount</span>
            <span className="second-invest-popup-second-column">
              €{currentEuroAmount}/{currentBtcAmount} BTC
            </span>
          </li>
        </ul>

        <button className="proceed-button">Proceed</button>
      </div>
    </div>
  );
};

export default SecondInvestPopup;
