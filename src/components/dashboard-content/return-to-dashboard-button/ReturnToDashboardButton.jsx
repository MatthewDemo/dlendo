import React from "react";
import "./ReturnToDashboardButton.scss";
import { Link } from "react-router-dom";

const ReturnToDashboardButton = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <button
        className="return-to-dashboard-button"
        onClick={handleButtonClick}
      >
        Return to the dashboard
      </button>
    </Link>
  );
};

export default ReturnToDashboardButton;
