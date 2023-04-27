import React, { useState } from "react";
import "./MapHeader.scss";
import Select from "./select/Select";

const MapHeader = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="map-header">
        <span className="header-title">Dlendo project map</span>
        <div className="search-container">
          <p>Sort By:</p>
          <Select />
        </div>
      </div>
    </div>
  );
};

export default MapHeader;
