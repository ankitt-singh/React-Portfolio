import React from "react";
import "./Home.css";
import profile from "../assets/Ankit Kumar Singh.jpg"; // add your image to /src/assets/

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, I'm <span>Ankit Kumar Singh</span></h1>
          <p>Full Stack Developer | Java | React | AI/ML Enthusiast</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <div className="home-img">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
