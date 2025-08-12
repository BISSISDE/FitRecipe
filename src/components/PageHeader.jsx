import React, { useState } from "react";
import "./Filter.css";
import app from "../assets/ScreenshotApp.jpg"
export default function PageHeader() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <p className="tagline">#1 nutrition tracking app</p>
          <h1 className="title">
            Nutrition tracking
            <br />
            <span className="highlight-container">
              for <span className="highlight">real life</span>
            </span>
          </h1>
          <p className="description">
            Make progress with the all-in-one food, exercise, and calorie
            tracker.
          </p>
          <a href="#" className="cta-button">
            START TODAY
          </a>
        </div>
        <div className="hero-image">
          <img src={app} alt="App Screenshot" />
        </div>
      </div>
    </div>
  );
}
