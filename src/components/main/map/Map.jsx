import React from "react";
import "./Map.scss";
import MapHeader from "./mapHeader/MapHeader";
import MapApiView from "./mapAipView/MapApiView";

const Map = ({isMobile}) => {
  return (
    <div className="map-container">
      <MapHeader />
      <div className="map-api-view-container" >
        <MapApiView isMobile={isMobile}/>
      </div>
    </div>
  );
};

export default Map;
