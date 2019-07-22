import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
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
            <NavbarBrand href="/">
              <FaPiedPiperHat className="JaycoinIcon" />
              Jaycoin
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#" className="NavBarButtons">
                    Explorer
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="NavBarButtons">
                    Mining
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="NavBarButtons">
                    Learn
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Button className="btnSignup">Sign Up</Button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Button className="btnLogin">Login</Button>
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
