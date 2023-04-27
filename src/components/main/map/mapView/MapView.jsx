import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Home1 from "../../../../assets/img/houses/home1.svg";
import Home2 from "../../../../assets/img/houses/home2.svg";
import Home3 from "../../../../assets/img/houses/home3.svg";
import Home4 from "../../../../assets/img/houses/home4.svg";
import PopupHouseInfo from "./popup-house-info/PopupHouseInfo";

const MapView = () => {
  const allCards = [
    {
      photos: [Home1],
      address: "Alberchtstrabe 335",
      alreadyFunded: 425000,
      totalPrice: 642000,
      return: 8,
      term: 24,
      location: "Germany",
      distribution: "Yearly",
      description:
        "Für die Ausführung gelten die zum Zeitpunkt des Bauantrages….",
      coordinates: [50.848696231323466, 11.73586373213352],
    },
    {
      photos: [Home2],
      address: "Grebenhain 36355",
      alreadyFunded: 425000,
      totalPrice: 847000,
      return: 9,
      term: 22,
      location: "Denmark",
      distribution: "Yearly",
      description:
        "Dieses wunderschöne Einfamilienhaus bietet Ihnen modernen Komfort und eine einzigartige Atmosphäre,",
      coordinates: [55.60667101051827, 9.187411915986292],
    },
    {
      photos: [Home3],
      address: "Hosenfeld 36154",
      alreadyFunded: 45000,
      totalPrice: 847000,
      return: 7,
      term: 26,
      location: "England",
      distribution: "Yearly",
      description:
        "Das charmante Stadthaus im Herzen der Stadt vereint historischen Charme mit zeitgemäßer Ausstattung",
      coordinates: [52.723427527818934, -0.8048238694044272],
    },
    {
      photos: [Home4],
      address: "Lauterbach (Hessen) 36341",
      alreadyFunded: 35000,
      totalPrice: 235000,
      return: 10,
      term: 19,
      location: "Austria",
      distribution: "Yearly",
      description:
        "Dieses stilvolle Mehrfamilienhaus besticht durch seine moderne Architektur und hochwertige Ausstattung.",
      coordinates: [48.19462518951254, 15.060658770338424],
    },
  ];
  const [selectedHouse, setSelectedHouse] = useState(null);
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 52.51631741228133, lng: 16.669496673372823 }}
    >
      {allCards.map((card) => (
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
