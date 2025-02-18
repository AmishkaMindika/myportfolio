import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Text and Type Animation on the left */}
      <div className="text-content">
        <h1>Hello, I'm Amishka Mindika Disanayaka</h1>
        <p> ~</p>

        {/* Type Animation */}
        <TypeAnimation
          sequence={[
            "I'm a Web Developer",
            1000,
            "I'm a React Enthusiast",
            1000,
            "I build amazing websites!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="type-animation"
        />
      </div>
      <p> </p>

      {/* Profile Image on the right */}
      <div className="profile-image-container">
        <img src="myp3.png" alt="My Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;
