import React from "react";
import { Card } from "reactstrap";

const InfoCard = props => {
  return (
    <Card className="balance-card shadow d-flex">
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        ACCOUNT INFO
      </div>

      <div className="balance-card-amount" style={{ marginTop: "0" }}>
        <p style={{ marginBottom: "0" }}>Username:</p>
        {props.username}
      </div>

      <div className="balance-card-amount" style={{ marginTop: "0" }}>
        <p style={{ marginBottom: "0" }}>Email:</p>
        {props.email}
      </div>
    </Card>
  );
};

export default InfoCard;
