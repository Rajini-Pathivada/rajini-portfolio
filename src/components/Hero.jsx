import "./Hero.css";

import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Rajini Pathivada</h1>

        <h2>Java Full Stack Developer</h2>

        <p className="hero-description">
          Final-Year Computer Science and Engineering student passionate about
          building full-stack web applications using Java, Spring Boot, React,
          and MySQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a
            href="/Rajini_Pathivada_Resume.pdf"
            download
            className="btn secondary-btn"
          >
            <FaFileDownload />
            Resume
          </a>

          <a
            href="https://github.com/Rajini-Pathivada"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rajini-pathivada-43a887305/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;