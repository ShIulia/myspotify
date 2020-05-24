import React from "react";
import "./Header.css";
import Search from "../pages/Search";
import { Navbar, Nav } from "react-bootstrap";
import { checkAndReturnToken } from "../utils";

class Header extends React.Component {
  getCurrentUser() {
    if (checkAndReturnToken() != null) return <div>Name</div>;
    else return <Nav.Link href="/login">Login</Nav.Link>;
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Search></Search>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-links">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
            {this.getCurrentUser()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
