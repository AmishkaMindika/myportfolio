import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  // Particle effect
  useEffect(() => {
    const numParticles = 100;
    const particlesContainer = document.querySelector(".particles");

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;

      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Background animations */}
        <div className="background"></div>
        <div className="particles"></div>

        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


