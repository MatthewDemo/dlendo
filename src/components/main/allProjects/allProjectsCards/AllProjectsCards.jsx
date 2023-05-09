import React from "react";
import "./AllProjectsCards.scss";
import Card from "../../projects/Card/Card";

const AllProjectsCards = ({  cards }) => {

  return (
    <div className="all-project-cards">
      {cards.map((card) => (
        <Card key={card.id} card={card} className="card" />
      ))}
    </div>
  );
};

export default AllProjectsCards;
