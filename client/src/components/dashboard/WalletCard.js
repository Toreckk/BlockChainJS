import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosSend, IoMdDownload } from "react-icons/io";

const WalletCard = props => {
  return (
    <Card className="balance-card shadow d-flex" text-center>
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        Account Statistics:
      </div>
      <button className="balance-card-button" style={{ color: "black" }}>
        {props.blocks} Blocks Mined
      </button>
      <button className="balance-card-button" style={{ color: "black" }}>
        {props.transactions} Transactions
      </button>
      <div className="p-3 d-flex justify-content-around">
        <button className="transactionc-btn">
          <IoIosSend style={{ marginRight: "0.33em" }} />
          Send
        </button>
        <button className="transactionc-btn">
          <IoMdDownload style={{ marginRight: "0.33em" }} />
          Request
        </button>
      </div>
    </Card>
  );
};

export default WalletCard;
