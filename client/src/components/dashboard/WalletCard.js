import React from "react";
import { Card } from "reactstrap";

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

      <button className="balance-card-button">Mine Coin</button>
    </Card>
  );
};

export default WalletCard;
