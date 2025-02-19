import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          I’m Amishka Mindika, a passionate web developer and computer science undergraduate at the Informatics Institute of Technology, affiliated with the University of Westminster, UK (2023 - 2027). 
        </p>

        <p>
          I am a nice, fun, and friendly person. I’m honest and punctual, and I work well in a team but also independently as I like to set goals and achieve them. I have good listening and communication skills, a creative mind, and I’m always up for new challenges. I am well-organized and plan ahead to manage my time efficiently.
        </p>

        <h2>Education</h2>
        <ul>
          <li>Foundation Certificate in Higher Education with a Merit Pass - IIT.</li>
          <li>BSc. Computer Science Undergraduate (2023 - 2027).</li>
        </ul>

        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li>Python</li>
          <li>Java</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React & Angular</li>
          <li>Spring Boot</li>
          <li>SQL</li>
          <li>Game Development</li>
          <li>Logo Design</li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>Airline Reservation System using Java.</li>
          <li>Cinema Management System using Python.</li>
          <li>"Life Below Water" website using HTML, CSS, and JS.</li>
          <li>Communication Skills Improving Mobile App (Flutter & Python - Ongoing).</li>
          <li>Event Booking System with concurrency synchronization (Ongoing).</li>
        </ul>

        <h2>Work Experience</h2>
        <p>Junior Marketing Assistant at Mindika Enterprises Pvt. Ltd (2022 – Present).</p>

        <h2>Volunteering</h2>
        <p>Member of the Leo Club of Pannipitiya Metro Titans.</p>

        <h2>Find Me Online</h2>
        <div className="about-links">
          <a href="https://linkedin.com/in/amishka-mindika-4937b61aa" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/AmishkaMindika" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.upwork.com/freelancers/~013fe4467c127e85eb" target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

