import React from "react";
import { Card } from "reactstrap";
import { FaPiedPiperHat } from "react-icons/fa";
import SendModal from "./SendModal";
import RequestModal from "./RequestModal";

const InfoCard = props => {
  return (
    <Card className="balance-card shadow d-flex" text-center>
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        ACCOUNT INFO
      </div>

      <div className="send-form-input" style={{ marginTop: "0" }}>
        <p style={{ marginBottom: "0" }}>Name:</p>
        Juan Coret
      </div>

      <div className="send-form-input" style={{ marginTop: "0" }}>
        <p style={{ marginBottom: "0" }}>Email:</p>
        coret.juan@gmail.com
      </div>
    </Card>
  );
};

export default InfoCard;
