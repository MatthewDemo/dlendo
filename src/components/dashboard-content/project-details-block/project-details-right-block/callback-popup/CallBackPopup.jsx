import React from "react";
import "./CallBackPopup.scss";

const CallBackPopup = ({toggleCallbackPopup}) => {
  return (
    <div className="callback-popup-background">
      <div className="callback-popup-container">
        <h2>Callback Popup Title</h2>
        <p>Popup content goes here</p>
        <button onClick={toggleCallbackPopup}>Close</button>
      </div>
    </div>
  );
};

export default CallBackPopup;
