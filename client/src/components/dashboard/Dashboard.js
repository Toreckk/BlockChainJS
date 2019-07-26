import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import BalanceCard from "./BalanceCard";
import WalletCard from "./WalletCard";
import DashboardCard from "./DashboardCard";

const Dashboard = props => {
  return (
    <div style={{ backgroundColor: "#F5F5F5", height: "100vh" }}>
      <div className="autheader d-flex justify-content-start">
        <Link className="logoName registerBtns d-flex" to="/">
          <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
          <p className="d-xs-none mt-3" />
          Jaycoin
        </Link>
      </div>
      <Container>
        <Row className="mt-5">
          <Col sm="12" md="3">
            <div>
              <BalanceCard amount={5} />
            </div>
            <div className="mt-3">
              <WalletCard blocks={2} transactions={21} />
            </div>
          </Col>
          <Col sm="12" md="9">
            <DashboardCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
