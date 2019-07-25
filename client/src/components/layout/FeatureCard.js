import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const FeatureCard = props => {
  return (
    <Card
      className="feature-card shadow  d-flex align-items-center mb-5"
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
        <button style={{ width: "100%" }} className="getWalletbtn">
          View
        </button>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
