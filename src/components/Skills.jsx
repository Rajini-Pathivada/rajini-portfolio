
import "./Skills.css";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiPython,
  SiC,
  SiApachemaven,
  SiIntellijidea,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C", icon: <SiC /> },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Spring", icon: <SiSpring /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST APIs", icon: "REST" },
        { name: "Servlets", icon: <FaJava /> },
        { name: "JSP", icon: "JSP" },
        { name: "JDBC", icon: "JDBC" },
      ],
    },

    {
      title: "ORM & Security",
      skills: [
        { name: "JPA", icon: "JPA" },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "Spring Security", icon: "SEC" },
        { name: "JWT", icon: "JWT" },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Core Java",
      skills: [
        { name: "OOP", icon: <FaJava /> },
        { name: "Collections", icon: <FaJava /> },
        { name: "Exception Handling", icon: <FaJava /> },
        { name: "Multithreading", icon: <FaJava /> },
        { name: "Java 8", icon: <FaJava /> },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Maven", icon: <SiApachemaven /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
        { name: "VS Code", icon: <VscVscode /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;