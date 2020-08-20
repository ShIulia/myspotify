import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { checkAndReturnToken } from "../utils";
import { useHistory } from "react-router-dom";

class Header extends React.Component {
  getCurrentUser() {
    if (checkAndReturnToken() != null) return <div>User: Iulia</div>;
    else return <Nav.Link href="/login">Login</Nav.Link>;
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" id="header-background">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/login">{this.getCurrentUser()}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
