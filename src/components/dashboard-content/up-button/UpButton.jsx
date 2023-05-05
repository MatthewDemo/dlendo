import React from "react";
import "./UpButton.scss";
import UpArrowsIcon from "../../../assets/img/dashboard-icons/up-button-arrows-icon.svg";

const UpButton = () => {
  return (
    <button
      className="upButton"
      onClick={() => {
        const component = document.getElementById("dashboard-content-block");
        if (component) {
          component.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <img src={UpArrowsIcon} alt="" />
    </button>
  );
};

export default UpButton;
