import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";

const BalanceCard = props => {
  return (
    <Card className="balance-card shadow d-flex" text-center>
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        TOTAL BALANCE
      </div>
      <div className="balance-card-amount d-flex flex-direction-column align-items-center">
        <FaPiedPiperHat className="JaycoinIcon" size="1.75em" />
        {props.amount}
        <p style={{ marginRight: "0.4em" }} />
        Jaycoins
      </div>
      <button className="balance-card-button">Exchange Coin</button>
    </Card>
  );
};

export default BalanceCard;
