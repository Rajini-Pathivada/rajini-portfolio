
import "./Projects.css";

import {
  FaGithub,
  FaJava,
  FaReact,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "StickerHub",
      type: "Full Stack E-commerce Application",
      description:
        "A full-stack e-commerce application for browsing and purchasing stickers, featuring user authentication, product management, shopping cart, order management, and payment integration.",
      technologies: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <FaReact /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Spring Security", icon: "SEC" },
        { name: "JWT", icon: "JWT" },
      ],
      github:
        "https://github.com/Rajini-Pathivada/StickerHub",
    },

    {
      title: "Employee Management System",
      type: "Full Stack CRUD Application",
      description:
        "A full-stack employee management application that allows users to add, update, delete, and view employee information through a React frontend and Spring Boot backend.",
      technologies: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <FaReact /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      github:
        "https://github.com/Rajini-Pathivada/Employee-Management-System",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-type">{project.type}</p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub />
                </a>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <div
                    className="technology"
                    key={technology.name}
                  >
                    <span className="technology-icon">
                      {technology.icon}
                    </span>

                    <span>{technology.name}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View on GitHub
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
