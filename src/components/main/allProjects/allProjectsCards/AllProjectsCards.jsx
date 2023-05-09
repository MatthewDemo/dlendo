import React from "react";
import "./AllProjectsCards.scss";
import Card from "../../projects/Card/Card";

const AllProjectsCards = ({ cards, selectedAssetClass }) => {
  const filteredCards = selectedAssetClass
    ? cards.filter(
        (card) => card.assetClass === selectedAssetClass.toLowerCase()
      )
    : cards;
  return (
    <div className="all-project-cards">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} className="card" />
      ))}
    </div>
  );
};

export default AllProjectsCards;


