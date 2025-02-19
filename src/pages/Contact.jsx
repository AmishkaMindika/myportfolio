import React, { useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import Email.js
import "./Contact.css";

function Contact() {
  const form = useRef();

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // Email.js Service ID
        "your_template_id",     // Email.js Template ID
        form.current,
        "your_user_id"          // Public Key from Email.js
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via email or connect on social media!</p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-item">
            <FaEnvelope className="icon" /> your.email@example.com
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="icon" /> linkedin.com/in/yourprofile
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="icon" /> github.com/yourgithub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
