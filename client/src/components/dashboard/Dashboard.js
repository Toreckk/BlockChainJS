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
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import BalanceCard from "./BalanceCard";
import WalletCard from "./WalletCard";
import DashboardCard from "./DashboardCard";
import { logout } from "../../actions/auth";

const Dashboard = props => {
  return (
    <div
      className="d-flex flex-column "
      style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
    >
      <div className="autheader">
        <Link className="logoName registerBtns d-flex" to="/">
          <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
          <p className="d-xs-none mt-3" />
          Jaycoin
        </Link>
        <div className="d-flex flex-row align-items-center">
          <Link
            tag={Link}
            onClick={props.logout}
            to="/"
            className="registerBtns registerToLoginbtn ml-3 "
          >
            Logout
          </Link>
        </div>
      </div>
      <Container>
        <Row className="mt-5">
          <Col sm="12" md="3">
            <div className="mb-3">
              <BalanceCard amount={5} />
            </div>
            <div className="mb-3">
              <WalletCard blocks={2} transactions={21} />
            </div>
          </Col>
          <Col sm="12" md="6" className="mb-3">
            <DashboardCard />
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <BalanceCard amount={5} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(Dashboard);
