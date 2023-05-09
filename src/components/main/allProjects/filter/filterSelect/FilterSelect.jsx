import React, { useState } from "react";
import ArrowDownIcon from "../../../../../assets/img/map/arrow-down-icon.svg";
import "./FilterSelect.scss";

const FilterSelect = ({ placeholder, options, setSelectedAssetClass }) => {
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
        {options.map((option, idx) => (
          <div
            className="select__item"
            key={idx}
            onClick={(e) => {
              handleSelectClick(e);
              setSelectedAssetClass && setSelectedAssetClass(option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSelect;


