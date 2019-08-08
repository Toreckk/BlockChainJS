import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";

import { logout } from "../../actions/auth";
import { getProfile } from "../../actions/profile";

import BalanceCard from "./BalanceCard";
import WalletCard from "./WalletCard";
import DashboardCard from "./DashboardCard";
import InfoCard from "./InfoCard";

const Dashboard = ({
  location,
  getProfile,
  auth: { user },
  profile: { profile, loading },
  logout
}) => {
  useEffect(() => {
    getProfile();
  }, []);

  return loading || profile === null ? (
    <Fragment />
  ) : (
    <div
      className="d-flex flex-column"
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
            onClick={logout}
            to="/"
            className="registerBtns registerToLoginbtn"
          >
            Logout
          </Link>
        </div>
      </div>
      <Container>
        <Row className="mt-5">
          <Col sm="12" md="3">
            <div className="mb-3">
              <BalanceCard
                balance={profile.balance}
                publicKey={profile.publicKey}
              />
            </div>
            <div className="mb-3">
              <WalletCard
                difficulty={profile.difficulty}
                miningReward={profile.miningReward}
              />
            </div>
          </Col>
          <Col sm="12" md="6" className="mb-3">
            <DashboardCard />
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <InfoCard username={profile.name} email={profile.email} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { logout, getProfile }
)(Dashboard);
