import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import { IoIosSend, IoMdDownload } from "react-icons/io";
import SendModal from "./SendModal";

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
      <div
        className="p-3 d-flex justify-content-around"
        style={{ borderRadius: "0px 0px 4px 4px", border: "1px solid #d5d5d5" }}
      >
        <SendModal />
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

export default BalanceCard;
