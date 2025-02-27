import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Amishka</div>

        <div className="nav-center">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <button className="quick-contact">Quick Contact</button>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="text-content">
          
          <h1>
            I'm <span className="highlight">AMISHKA MINDIKA</span>
          </h1>
          <p>
            
          </p>
         

          {/* Type Animation */}
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "React Enthusiast",
              1000,
              "Mobile App Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="type-animation"
          />

          {/* Buttons */}
          <div className="buttons">
            <button className="hire-btn">Hire Me</button>
            <button className="watch-btn">▶ Watch Video</button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="profile-image-container">
          <img src="myp3.png" alt="My Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
