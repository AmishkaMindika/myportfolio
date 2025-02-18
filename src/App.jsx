import React from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg"; // Replace with your image path

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
        <p>Full Stack Developer | React Enthusiast | Creative Coder</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A modern React project with cool features.</p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <p>A fully responsive website built with React and CSS.</p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Three</h3>
            <p>An e-commerce application with a great user experience.</p>
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
