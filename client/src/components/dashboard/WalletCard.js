import React from "react";
import { Card, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const WalletCard = props => {
  return (
    <Card className="balance-card shadow d-flex">
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        BLOCKCHAIN
      </div>
      <div className="balance-card-amount d-flex flex-direction-column align-items-center">
        Difficulty: {props.difficulty}
      </div>
      <div
        className="balance-card-amount d-flex flex-direction-column align-items-center"
        style={{ borderTop: "1px solid #d5d5d5" }}
      >
        Mining Reward: {props.miningReward}
      </div>

      <NavLink
        tag={Link}
        to="/pending"
        className="balance-card-button"
        style={{ textAlign: "center", fontWeight: "600", padding: "1rem 0" }}
      >
        Mine Coin
      </NavLink>
    </Card>
  );
};

export default WalletCard;
