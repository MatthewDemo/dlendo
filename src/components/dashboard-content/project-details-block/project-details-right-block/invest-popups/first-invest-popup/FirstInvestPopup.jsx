import React from "react";
import "./FirstInvestPopup.scss";

const FirstInvestPopup = ({toggleFirstInvestPopup, setIsFirstInvestPopupOpen,setIsSecondInvestPopupOpen}) => {
  return (
    <div className="first-invest-popup-background">
      <div className="first-invest-popup-container">
        <h2>First invest Popup Title</h2>
        <p>Popup content goes here</p>
        <button onClick={toggleFirstInvestPopup}>Close</button>
        <button
          onClick={() => {
            setIsFirstInvestPopupOpen(false);
            setIsSecondInvestPopupOpen(true);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstInvestPopup;
