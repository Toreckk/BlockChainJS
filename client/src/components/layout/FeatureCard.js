import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
const FeatureCard = props => {
  return (
    <Card
      className="feature-card shadow d-flex align-items-center mb-5"
      text-center
    >
      <CardImg
        top
        src={props.imgsrc}
        alt="Wallet"
        style={{
          width: "50%"
        }}
        className="card-img"
      />
      <CardBody>
        <CardTitle className="font-weight-bold" style={{ fontSize: "32px" }}>
          {props.title}
        </CardTitle>
        <CardText style={{ fontSize: "20px" }}>{props.text}</CardText>
        <Link
          to={props.forwardto}
          className="getWalletbtn d-flex align-items-center justify-content-center"
        >
          View
        </Link>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
