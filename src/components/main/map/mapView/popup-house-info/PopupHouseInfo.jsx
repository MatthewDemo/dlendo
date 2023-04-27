import React from "react";
import "./PopupHouseInfo.scss";
import NewIcon from "../../../../../assets/img/projects/new-icon.svg";
import HotFireIcon from "../../../../../assets/img/projects/hot-fire-icon.svg";

const PopupHouseInfo = ({ selectedHouse }) => {
  const progress = Math.round(
    (selectedHouse.alreadyFunded / selectedHouse.totalPrice) * 100
  );

  return (
    <div className="popup-house-info">
      <div className="popup-image-container">
        <img
          className="popup-house-image"
          src={selectedHouse.photos[0]}
          alt=""
        />
        <div className="button-container">
          <button className="circle-button">
            <img src={HotFireIcon} alt="" />
          </button>
          <button className="circle-button">
            <img src={NewIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="popup-info-container">
        <p>{selectedHouse.address}</p>
        <span className="funded-style">
          <span className="funded-text-style">
            €{selectedHouse.alreadyFunded.toLocaleString()}/€
            {selectedHouse.totalPrice.toLocaleString()}
          </span>
          funded
        </span>
        <div className="percent-style">{progress}%</div>
        <div className="return-term-style">{selectedHouse.return} % p.a.</div>
        <div className="return-term-style">{selectedHouse.term} Month</div>
      </div>
    </div>
  );
};

export default PopupHouseInfo;
