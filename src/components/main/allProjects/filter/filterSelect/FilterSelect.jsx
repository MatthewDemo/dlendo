import React, { useState } from "react";
import ArrowDownIcon from "../../../../../assets/img/map/arrow-down-icon.svg";
import "./FilterSelect.scss";

const FilterSelect = ({ placeholder, options }) => {
  const [currentSortValue, setCurrentSortValue] = useState(placeholder);

  const handleSelectClick = (e) => {
    const selectElement = e.currentTarget.closest(".filter-select");
    selectElement.classList.toggle("is-active");

    setCurrentSortValue(e.currentTarget.innerText);
  };
  return (
    <div className="filter-select">
      <div className="filter-select-header" onClick={handleSelectClick}>
        <span className="filter-select-current">{currentSortValue}</span>
        <div className="filter-select-icon">
          <img src={ArrowDownIcon} alt="" />
        </div>
      </div>
      <div className="select__body">
        {options.map((option) => (
          <div className="select__item" onClick={(e) => handleSelectClick(e)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSelect;
