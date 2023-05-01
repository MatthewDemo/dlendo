import React from "react";
import "./Map.scss";
import MapHeader from "./mapHeader/MapHeader";
import MapApiView from "./mapAipView/MapApiView";
// import WrappedMap from "./mapView/MapView";

const Map = ({allCards}) => {
  return (
    <div>
      <MapHeader />
      <div style={{ width: "1030px", height: '424px' }}>
        <MapApiView />
        {/* <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        /> */}
      </div>
    </div>
  );
};

export default Map;
