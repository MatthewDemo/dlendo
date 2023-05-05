import React from "react";
import "./Location.scss";
import { useLoadScript } from "@react-google-maps/api";
import LocationMap from "./location-map/LocationMap";
import LocationArrow from "../../../assets/img/dashboard-icons/deal-highlight-icons/deal-highlight-image.svg";

const Location = ({ activeIndex }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBVawNAYPUbUWksY9BAuD_eXd1i-DaB7ko",
  });

  if (!isLoaded) return <div> Map</div>;

  return (
    <div className="location-block">
      <span className="location-block-title">Location</span>
      <LocationMap activeIndex={activeIndex} />
      <p className="location-description">
        The 22nd district, also called 'Donaustadt', is located east of the city
        centre of Vienna and is Vienna’s most populous district. The 22nd
        District covers almost a quarter of the total area of the Vienna
        municipal territory and is characterized by its comprehensive
        appearance. In addition to numerous green spaces and local recreation
        areas, which make up almost 50% of the total area of the 22nd District,
        there are numerous large housing estates and detached houses, such as
        the Donau City district, which is characterised by office and high-rise{" "}
      </p>
      <ul>
        <li>
          <img src={LocationArrow} alt="" className="investment-case-image" />
          <span className="investment-case-title">
            Seestadt Aspern <br />
            <p className="investment-case-text">
              The Urban Lakeside Aspern in the 22nd district of Vienna is one of
              the largest urban development projects in Europe. Over the next
              few years, the district will be home to over 20,000 people who
              will live and work here. In the middle of the Urban Lakeside is
              the artificial lake that gives the district its name and serves as
              a recreational area for
            </p>
          </span>
        </li>
        <li>
          <img src={LocationArrow} alt="" className="investment-case-image" />
          <span className="investment-case-title">
            Donaupark <br />
            <p className="investment-case-text">
              The Donaupark is a park of about 604,000 m² in the 22nd district
              of Vienna Donaustadt. The Donaupark is conveniently located
              between Wagramer Strasse, the Bruckhaufen housing estate,
              Arbeiterstrandbadstrasse and Hubertusdamm.
            </p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Location;
