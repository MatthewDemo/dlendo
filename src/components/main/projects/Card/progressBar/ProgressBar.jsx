import React from "react";

const ProgressBar = ({ card }) => {
  const progress = Math.round((card.alreadyFunded / card.totalPrice) * 100);
  const progressBarStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "12.19px",
    height: "32px",
    width: "214px",
    marginBottom: "10px",
    borderRadius: "2.5px",
  };

  const percentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "44px",
    height: "18px",
    border: "1px solid rgba(50, 48, 84, 1)",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "700",
    color: "rgba(250, 84, 77, 1)",
    marginRight: "10px",
  };
  const filledStyle = {
    height: "5px",
    backgroundColor: "#FA544D",
    width: `${progress}%`,
    borderRadius: "2.5px",
  };
  const unfilledStyle = {
    height: "5px",
    backgroundColor: "#8186AF",
    width: `${100 - progress}%`,
    borderRadius: "0 2.5px 2.5px 0",
    opacity: "0.11",
  };
  const fundedStyle = {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Montserrat",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "12px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "3px",
  };
  const fundedTextStyle = {
    color: "rgba(250, 84, 77, 1)",
    marginRight: "5px",
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "9px" }}>
      <div style={progressBarStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={percentStyle}>{progress}%</div>
          <span style={fundedStyle}>
            <span style={fundedTextStyle}>
              €{card.alreadyFunded.toLocaleString()}/€
              {card.totalPrice.toLocaleString()}
            </span>
            funded
          </span>
        </div>
        <div style={{ display: "flex", width: "100%", margin: "9px" }}>
          <div style={filledStyle} />
          <div style={unfilledStyle} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
