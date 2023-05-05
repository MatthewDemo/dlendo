import React from "react";
import "./ReturnToDashboardButton.scss";

const ReturnToDashboardButton = () => {
  return (
    <button
      className="return-to-dashboard-button"
      onClick={() => {
        const component = document.getElementById("dashboard-content-block");
        if (component) {
          component.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      Return to the dashboard
    </button>
  );
};

export default ReturnToDashboardButton;
