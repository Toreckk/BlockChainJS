import React, { useState, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const AppNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [NavData, setNavData] = useState({
    isOpen: false
  });
  const { isOpen } = NavData;

  const toggle = e => {
    setNavData({ isOpen: !isOpen });
  };

  const authLinks = (
    <NavItem>
      <NavLink onClick={logout} tag={Link} to="/" className="btnLogin ml-2">
        Log Out
      </NavLink>
    </NavItem>
  );

  const guestLinks = (
    <div className="d-flex flex-row">
      <NavItem>
        <NavLink className="btnSignup" tag={Link} to="/register">
          Sign Up
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/login" className="btnLogin">
          Login
        </NavLink>
      </NavItem>
    </div>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand className="navBrand" tag={Link} to="/">
            <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
            Jaycoin
          </NavbarBrand>
          <NavbarToggler onClick={e => toggle(e)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ color: "white" }}
                  className="NavBarButtons"
                >
                  Explorer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/pending"
                  style={{ color: "white" }}
                  className="NavBarButtons"
                >
                  Mining
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ color: "white" }}
                  className="NavBarButtons"
                >
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/dashboard"
                  style={{ color: "white" }}
                  className="NavBarButtons"
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <div className="divider">|</div>
              {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

AppNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(AppNavbar);
