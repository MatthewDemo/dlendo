import React from "react";
import "./Map.scss";
import MapHeader from "./mapHeader/MapHeader";
import MapApiView from "./mapAipView/MapApiView";

const Map = () => {
  return (
    <div>
      <MapHeader />
      <div style={{ width: "1030px", height: "424px" }}>
        <MapApiView />
      </div>
    </div>
  );
};

export default Map;
