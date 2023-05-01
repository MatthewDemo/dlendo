import React, { useState } from "react";
import "./MapApiView.scss";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import PopupHouseInfo from "./popup-house-info/PopupHouseInfo";

const center = { lat: 52.51631741228133, lng: 16.669496673372823 };
const MapApiView = () => {
  const allHouses = useSelector((state) => state.house.allHouses);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBVawNAYPUbUWksY9BAuD_eXd1i-DaB7ko",
  });

  if (!isLoaded) return <div> Map</div>;
  return (
    <GoogleMap
      zoom={5}
      center={center}
      mapContainerClassName="map-api-container"
    >
      {allHouses.map((card) => (
        <Marker
          key={card.coordinates[0]}
          position={{ lat: card.coordinates[0], lng: card.coordinates[1] }}
          onClick={() => {
            setSelectedHouse(card);
          }}
        />
      ))}
      {selectedHouse && (
        <InfoWindow
          position={{
            lat: selectedHouse.coordinates[0],
            lng: selectedHouse.coordinates[1],
          }}
          onCloseClick={() => setSelectedHouse(null)}
        >
          <PopupHouseInfo selectedHouse={selectedHouse} />
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapApiView;
