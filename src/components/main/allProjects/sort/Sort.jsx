import React, {useState} from "react";
import ArrowDownIcon from "../../../../assets/img/map/arrow-down-icon.svg";

const Sort = () => {
  const [currentSortValue, setCurrentSortValue] = useState("Select the option");

  const handleSelectClick = (e) => {
    const selectElement = e.currentTarget.closest(".select");
    selectElement.classList.toggle("is-active");

    setCurrentSortValue(e.currentTarget.innerText);
  };

  return (
    <div className="select">
      <div className="select__header" onClick={handleSelectClick}>
        <span className="select__current">{currentSortValue}</span>
        <div className="select__icon">
          <img src={ArrowDownIcon} alt="" />
        </div>
      </div>
      <div className="select__body">
        <div className="select__item" onClick={(e) => handleSelectClick(e)}>
          All projects
        </div>
        <div className="select__item" onClick={(e) => handleSelectClick(e)}>
          Hot projects
        </div>
        <div className="select__item" onClick={(e) => handleSelectClick(e)}>
          New projects
        </div>
      </div>
    </div>
  );
};

export default Sort;
