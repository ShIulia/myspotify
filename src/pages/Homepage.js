import React from "react";
import icon from "../icons/icon.png";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-main">
        <div className="left">
          <div className="centerd">
            <h1 className="h1-homepage">Spotify made easier.</h1>
            <div className="homepage-text">
              With Spotify, it’s easy to find the right music or podcast for
              every moment – on your phone, your computer, your tablet and more.
              Spotify Free lets you listen at normal (96 kilobits per second) or
              high quality (160 Kbps). Spotify Premium adds Extreme quality
              streaming at 320 Kbps, which can make for better, more detailed
              audio output if you use high-end headphones or speakers.{" "}
            </div>
            <h3>Why Choose Spotify?</h3>
          </div>
        </div>
        <div className="right">
          <div className="logo-left">
            <img src={require("../icons/icon.png")} />
          </div>
        </div>
      </div>
      <div className="homepage-footer">
        <div className="footer-card">
          High-quality streaming and audio quality
        </div>
        <div className="footer-card">
          Spotify playlists, radio and discovering new music
        </div>
        <div className="footer-card">Find people and friends and connect</div>
      </div>
    </div>
  );
}
