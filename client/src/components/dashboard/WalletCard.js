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
      <button
        className="wallet-card-button"
        style={{
          color: "black",
          borderRadius: "0px 0px 0px 0px",
          borderTop: "none"
        }}
      >
        {props.blocks} Blocks Mined
      </button>
      <button
        className="wallet-card-button"
        style={{ color: "black", borderRadius: "0px 0px 0px 0px" }}
      >
        {props.transactions} Transactions
      </button>
      <div
        className="p-3 d-flex justify-content-around"
        style={{ borderRadius: "0px 0px 4px 4px", border: "1px solid #d5d5d5" }}
      >
        <button className="transactionc-btn">
          <IoIosSend style={{ marginRight: "0.33em" }} />
          Send
        </button>
        <button className="transactionc-btn">
          <IoMdDownload
            style={{
              marginRight: "0.33em"
            }}
          />
          Request
        </button>
      </div>
    </Card>
  );
};

export default WalletCard;
