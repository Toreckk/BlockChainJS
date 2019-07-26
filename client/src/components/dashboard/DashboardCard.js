import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";

const DashboardCard = props => {
  return (
    <Card className="balance-card shadow d-flex" text-center>
      <div
        className="balance-card-title d-flex justify-content-start"
        syle={{ fontWeight: "500", color: "#494949" }}
      >
        ACCOUNT INFORMATION
      </div>
      <div
        className="balance-card-amount d-flex flex-direction-column align-items-center"
        style={{ height: "700px" }}
      />
    </Card>
  );
};

export default DashboardCard;
