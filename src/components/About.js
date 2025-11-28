import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi! I'm <strong>GOWRI KRISHNA</strong>, a passionate and dedicated
          <strong> Frontend Developer</strong> with a strong interest in building
          clean, user-friendly, and responsive web applications.
        </p>

        <p className="about-text">
          I specialize in <strong>React.js</strong>, <strong>JavaScript</strong>,
          <strong> HTML</strong>, <strong>CSS</strong>, and modern UI frameworks
          like <strong>Bootstrap</strong>. I love converting creative ideas into
          real working digital experiences.
        </p>

        <p className="about-text">
          My goal is to become a full-stack developer and continue learning new
          technologies every day.
        </p>

        <h2 className="about-subtitle">Why Work With Me?</h2>
        <ul className="about-list">
          <li>✔ Strong problem-solving skills</li>
          <li>✔ Clean and maintainable code</li>
          <li>✔ Responsive & modern UI design</li>
          <li>✔ Fast learner and team player</li>
        </ul>
      </div>

      <div className="about-image">
        {/* <img src="/profile.jpg" alt="Profile" /> */}
      </div>
    </div>
  );
};

export default About;
