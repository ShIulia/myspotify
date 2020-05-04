import React from "react";
import "./Header.css";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Browse Artists"
            className="search"
          />
          <Button className="button">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-links">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
