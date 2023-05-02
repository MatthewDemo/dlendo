import React from "react";
import './Buttons.scss'
import NewButton from "./new-button/NewButton";
import CompareButton from "./compare-button/CompareButton";

const Buttons = () => {
  return (
    <div className="card-button-wrapper">
      <NewButton />
      <CompareButton />
    </div>
  );
};

export default Buttons;
