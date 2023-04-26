import React from "react";
import "./ReturnTermBlock.scss";

const ReturnTermBlock = ({ card }) => {
  return (
    <div className="wrapper">
      <div className="return-block">
        <p>Return</p>
        <div className="return-block-amount">{card.return} % p.a.</div>
      </div>
      <div className="term-block">
        <p>Term</p>
        <div>{card.term} Month</div>
      </div>
    </div>
  );
};

export default ReturnTermBlock;
