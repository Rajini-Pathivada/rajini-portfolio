
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2>Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Full Stack Development Intern</h3>
              <p className="company-name">
                Datavalley India Pvt. Ltd.
              </p>
            </div>

            <span className="experience-date">
              May 2026 – June 2026
            </span>
          </div>

          <p className="experience-description">
            Completed a full-stack development internship through the
            APSCHE Online S-T Internship program, with structured
            training in Java, web development, SQL, and Spring Boot.
          </p>

          <ul>
            <li>
              Strengthened Java programming and object-oriented
              programming concepts.
            </li>

            <li>
              Learned and practiced frontend development using HTML,
              CSS, and JavaScript.
            </li>

            <li>
              Worked with SQL and relational database concepts for
              web applications.
            </li>

            <li>
              Gained practical exposure to Spring Boot and the
              fundamentals of full-stack application development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
