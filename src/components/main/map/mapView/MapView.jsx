import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import PopupHouseInfo from "./popup-house-info/PopupHouseInfo";
import { useSelector } from "react-redux";

const MapView = () => {
  const allHouses = useSelector((state) => state.house.allHouses)
  const [selectedHouse, setSelectedHouse] = useState(null);
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 52.51631741228133, lng: 16.669496673372823 }}
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
const WrappedMap = withScriptjs(withGoogleMap(MapView));

export default WrappedMap;
