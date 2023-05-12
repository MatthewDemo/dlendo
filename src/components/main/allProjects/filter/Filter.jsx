import React, { useState } from "react";
import "./Filter.scss";
import FilterSelect from "./filterSelect/FilterSelect";

const Filter = ({ setSelectedAssetClass }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const returnOpt = ["< 5% p.a.", "5-6% p.a.", "6-7% p.a.", ">7% p.a"];
  const duration = ["12-24 months", "24-36 months", ">36 months"];
  const assetClass = ["Residental", "Commercial"];
  const status = [
    "Open fo investments",
    "Coming soon",
    "Funded successfully",
    "Already refunded",
  ];

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button
        className={`filter-button ${isDropdownVisible ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        Filter(4)
      </button>
      {isDropdownVisible && (
        <div className="filter-dropdown">
          <FilterSelect placeholder={"Return"} options={returnOpt} />
          <FilterSelect placeholder={"Duration"} options={duration} />
          <FilterSelect
            placeholder={"Asset Class"}
            options={assetClass}
            setSelectedAssetClass={setSelectedAssetClass}
          />
          <FilterSelect placeholder={"Status"} options={status} />
        </div>
      )}
    </div>
  );
};

export default Filter;
