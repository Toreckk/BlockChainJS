import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import SendModal from "./SendModal";
import RequestModal from "./RequestModal";

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
        Jaycoin
      </div>
      <div
        className="p-3 d-flex justify-content-around"
        style={{ borderRadius: "0px 0px 4px 4px", border: "1px solid #d5d5d5" }}
      >
        <SendModal />
        <RequestModal />
      </div>
    </Card>
  );
};

export default BalanceCard;
