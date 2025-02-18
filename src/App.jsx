import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>
          <TypeAnimation
            sequence={[
              "A Web Developer 🚀", 
              1000, 
              "A React Enthusiast ⚛️", 
              1000, 
              "A Creative Coder 💡", 
              1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h2>
        <p>Passionate about building interactive web applications.</p>
        <a href="#contact" className="btn">Let's Connect</a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a front-end web developer with experience in building scalable web applications.
          I specialize in React, JavaScript, and modern UI/UX designs.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project One</h3>
            <p>A cool web app built using React and Firebase.</p>
          </div>
          <div className="project-card">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project Two</h3>
            <p>An e-commerce website with modern UI.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a chat.</p>
        <a href="mailto:your.email@example.com" className="btn">Email Me</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
