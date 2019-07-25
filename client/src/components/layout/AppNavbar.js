import React, { Component } from "react";
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

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand tag={Link} to="/">
              <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
              Jaycoin
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
                    href="#"
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
                <p className="divider">|</p>
                <NavItem>
                  <NavLink tag={Link} to="/register" className="btnSignup">
                    Sign Up
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/login" className="btnLogin">
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
