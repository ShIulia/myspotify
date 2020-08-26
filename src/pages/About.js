import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-header">About Me</div>

      <div className="about-text">
        <ul>
          <li>
            {" "}
            <a target="_blank" id="list-a" href="https://github.com/ShIulia">
              Github
            </a>{" "}
          </li>
          <li>
            <a
              target="_blank"
              id="list-a"
              href="https://www.linkedin.com/in/iuliatamazlicariu/"
            >
              Linkedin
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
