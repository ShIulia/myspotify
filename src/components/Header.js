import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import React from "react";
// import "./Header.css";
// import Search from "../pages/Search";
// import { Navbar, Nav } from "react-bootstrap";
// import { checkAndReturnToken } from "../utils";

// class Header extends React.Component {
//   getCurrentUser() {
//     if (checkAndReturnToken() != null) return <div>Name</div>;
//     else return <Nav.Link href="/login">Login</Nav.Link>;
//   }
//   render() {
//     return (
//       <Navbar bg="light" expand="lg">
//         <Search></Search>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="header-links">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/categories">Categories</Nav.Link>
//             {this.getCurrentUser()}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }

// export default Header;
