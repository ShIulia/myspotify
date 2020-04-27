import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <input></input>
      <button>Search</button>
      <div className="tab">
        <button className="tablinks">
          Categories
        </button>
        <button className="tablinks">
          Artists
        </button>
        <button className="tablinks">
          About
        </button>
      </div>
    </div>
  );
}

export default Header;
