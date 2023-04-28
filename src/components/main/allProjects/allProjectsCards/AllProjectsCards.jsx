import React from "react";
import "./AllProjectsCards.scss";
import { useSelector } from "react-redux";
import Card from "../../projects/Card/Card";

const AllProjectsCards = () => {
  const allHouses = useSelector((state) => state.house.allHouses);

  return (
    <div className="all-project-cards">
      {allHouses.map((card) => (
        <Card card={card}  className="card"/>
      ))}
    </div>
  );
};

export default AllProjectsCards;
