import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";




class Header extends React.Component {

  render() {
    console.log("this is the header");

  return (
<Navbar>
  <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/categories">Category</Link>
              
            </li>
          </ul>
        </nav>
      </header>
      </Navbar>
  );
}
}
      
export default Header;