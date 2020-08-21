import React from "react";
import icon from "../icons/icon.png";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <div className="homepage-main">
        <div className="left">
          <h1>Spotify made easier</h1>
          <div>
            With Spotify, it’s easy to find the right music or podcast for every
            moment – on your phone, your computer, your tablet and more.{" "}
          </div>
          <h3>Why Choose MySpotify?</h3>
        </div>
        <div className="right">
          <div className="logo-left">Logo</div>
        </div>
      </div>

      <div className="homepage-footer"></div>
    </div>
  );
}
