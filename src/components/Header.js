import React, { useEffect } from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { checkAndReturnToken } from "../utils";
import { useHistory } from "react-router-dom";

const getCurrentUser = () => {
  if (checkAndReturnToken() != null)
    return <div className="header-user">User: Iulia</div>;
  else return <Nav.Link href="/login">Login</Nav.Link>;
};

export default function Header() {
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <Navbar bg="light" expand="lg" id="header-background">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link className="app-title">mySpotify</Nav.Link>
        <Nav className="header-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link>{getCurrentUser()}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
