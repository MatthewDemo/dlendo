import React, { useState } from "react";
import './LocationMap.scss'
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import PopupHouseInfo from "../../../main/map/mapAipView/popup-house-info/PopupHouseInfo";

const containerStyle = {
  width: '720px',
  height: '500px'
};

const LocationMap = ({ activeIndex }) => {
  const allHouses = useSelector((state) => state.house.allHouses);
  const [houseInfo, setHouseInfo] = useState(null);
  return (
    <div className="location-map">
      <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={7}
        center={{
          lat: allHouses[activeIndex].coordinates[0],
          lng: allHouses[activeIndex].coordinates[1],
        }}
        mapContainerClassName="map-api-container"
      >
        <Marker
          key={allHouses[activeIndex].coordinates[0]}
          position={{
            lat: allHouses[activeIndex].coordinates[0],
            lng: allHouses[activeIndex].coordinates[1],
          }}
          onClick={() => {
            setHouseInfo(allHouses[activeIndex]);
          }}
        />
        {houseInfo && (
          <InfoWindow
            position={{
              lat: houseInfo.coordinates[0],
              lng: houseInfo.coordinates[1],
            }}
            onCloseClick={() => setHouseInfo(null)}
          >
            <PopupHouseInfo selectedHouse={houseInfo} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
