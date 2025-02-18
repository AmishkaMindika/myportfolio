import React from 'react';
import Typed from 'react-typed';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-animation"></div>
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <Typed
          strings={[
            'I am a Full Stack Developer',
            'I am a UI/UX Designer',
            'I am a Tech Enthusiast',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
          className="typed-text"
        />
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm John Doe, a passionate developer with expertise in building modern web applications.
          I love working with React, Node.js, and designing beautiful user interfaces.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">React</div>
          <div className="skill">JavaScript</div>
          <div className="skill">Node.js</div>
          <div className="skill">CSS3</div>
          <div className="skill">HTML5</div>
          <div className="skill">MongoDB</div>
        </div>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <h3>Project 1</h3>
            <p>A modern e-commerce platform built with React and Node.js.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>A task management app with real-time collaboration features.</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>A portfolio website showcasing my skills and projects.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

