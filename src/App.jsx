import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import profileImage from "./assets/profile.jpg"; // Make sure to have your image here

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h2>Hi, I'm [Your Name]</h2>
        <TypeAnimation
          sequence={[
            "A Full Stack Developer",
            1000,
            "A Creative Coder",
            1000,
            "A React Enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="type-animation"
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A modern React project with amazing features.</p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <p>A responsive website built with React and modern CSS.</p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Three</h3>
            <p>An interactive React application for productivity.</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
        <p>GitHub: github.com/yourgithub</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

