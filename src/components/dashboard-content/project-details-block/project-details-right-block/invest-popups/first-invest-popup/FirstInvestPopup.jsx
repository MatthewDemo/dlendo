import React, { useState } from "react";
import "./FirstInvestPopup.scss";
import PopupHeaderLogo from "../../../../../../assets/img/popup-images/popup-header-logo.svg";
import PopupCloseImage from "../../../../../../assets/img/popup-images/popup-close-button-image.svg";
import PromoCodeIcon from "../../../../../../assets/img/popup-images/invest-popup-icons/promo-code-icon.svg";
import UncheckedCheckboxIcon from "../../../../../../assets/img/popup-images/invest-popup-icons/unchecked-checkbox.svg";
import GalochkaIcon from "../../../../../../assets/img/popup-images/invest-popup-icons/galochka-icon.svg";

import testFile from "../../../../../../assets/documents/testtest.docx";
import loanContractFile from "../../../../../../assets/documents/Loan-contract.docx";
import factSheetFile from "../../../../../../assets/documents/Fact-sheet.docx";

const FirstInvestPopup = ({
  toggleFirstInvestPopup,
  setIsFirstInvestPopupOpen,
  setIsSecondInvestPopupOpen,
}) => {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);

  return (
    <div className="first-invest-popup-background">
      <div className="first-invest-popup-container">
        <div className="first-invest-popup-header">
          <img src={PopupHeaderLogo} alt="" />
          <button onClick={toggleFirstInvestPopup}>
            <img src={PopupCloseImage} alt="" />
          </button>
        </div>
        <h1>Investment confirmation</h1>
        <ul className="first-invest-popup-list">
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">Amount</span>
            <span className="first-invest-popup-second-column">
              €425.00/0.01389479 BTC
            </span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">Return</span>
            <span className="first-invest-popup-second-column">7%</span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">Duration</span>
            <span className="first-invest-popup-second-column">36 months</span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">
              Distribution
            </span>
            <span className="first-invest-popup-second-column">30 months</span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">
              Financial instrument
            </span>
            <span className="first-invest-popup-second-column">
              Qualified Loan
            </span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">Issuer</span>
            <span className="first-invest-popup-second-column">IME GmbH</span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">
              Payment method
            </span>
            <span className="first-invest-popup-second-column">
              Kreditkarte
            </span>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-first-column">
              Payment time
            </span>
            <span className="first-invest-popup-second-column">Instant</span>
          </li>
        </ul>

        <div className="first-invest-popup-loan-amount-container">
          <span className="first-invest-popup-input-title">Loan amount</span>
          <div className="first-invest-popup-second-column-image-container">
            <img src={PromoCodeIcon} alt="" />
          </div>
          <input type="text" placeholder="Enter your promo code here" />
          <button>Redeem</button>
        </div>

        <ul className="documents-container">
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-input-title">
              Terms and conditions
            </span>
            <button className="first-popup-download-button">
              <a href={testFile} download>
                Download
              </a>
            </button>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-input-title">
              Loan contract
            </span>
            <button className="first-popup-download-button">
              <a href={loanContractFile} download>
                Download
              </a>
            </button>
          </li>
          <li className="first-invest-popup-list-item">
            <span className="first-invest-popup-input-title">Fact sheet</span>
            <button className="first-popup-download-button">
              <a href={factSheetFile} download>
                Download
              </a>
            </button>
          </li>
        </ul>

        <ul className="checkbox-container">
          <li className="first-invest-popup-checkbox-list">
            <img
              src={UncheckedCheckboxIcon}
              alt=""
              className="checkbox1-icon"
              onClick={() => setFirstChecked(!firstChecked)}
            />
            {firstChecked && (
              <img
                src={GalochkaIcon}
                alt=""
                className="galochka-icon"
                onClick={() => setFirstChecked(!firstChecked)}
              />
            )}
            <label htmlFor="checkbox1">
              <span>
                By confirming you agree to theterms of Dlendo GmbH and accept
                them hereby.
              </span>
            </label>
          </li>
          <li className="first-invest-popup-checkbox-list">
            <img
              src={UncheckedCheckboxIcon}
              alt=""
              className="checkbox2-icon"
              onClick={() => setSecondChecked(!secondChecked)}
            />
            {secondChecked && (
              <img
                src={GalochkaIcon}
                alt=""
                className="galochka-icon"
                onClick={() => setSecondChecked(!secondChecked)}
              />
            )}
            <label htmlFor="checkbox2">
              <span>
                I am taking the note of the loan contract / cancellation on
                instruction and Fact Sheetand accept them.
              </span>
            </label>
          </li>
          <li className="first-invest-popup-checkbox-list">
            <img
              src={UncheckedCheckboxIcon}
              alt=""
              className="checkbox3-icon"
              onClick={() => setThirdChecked(!thirdChecked)}
            />
            {thirdChecked && (
              <img
                src={GalochkaIcon}
                alt=""
                className="galochka3-icon"
                onClick={() => setThirdChecked(!thirdChecked)}
              />
            )}
            <label htmlFor="checkbox3">
              <span>I am aware of the risk.</span>
            </label>
          </li>
        </ul>

        <button
          className="confirm-button"
          onClick={() => {
            setIsFirstInvestPopupOpen(false);
            setIsSecondInvestPopupOpen(true);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FirstInvestPopup;
