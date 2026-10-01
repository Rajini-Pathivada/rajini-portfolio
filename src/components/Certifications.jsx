
import "./Certifications.css";

import {
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Java Full Stack Developer with React & Spring Boot",
      issuer: "Udemy",
      icon: <FaCertificate />,
    },
    {
      title: "Full Stack Development with Java",
      issuer: "Datavalley India Pvt. Ltd.",
      detail: "Internship Certificate",
      icon: <FaCertificate />,
    },
    {
      title: "Artificial Intelligence: Search Methods for Problem Solving",
      issuer: "NPTEL",
      detail: "Elite – 75%",
      icon: <FaGraduationCap />,
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      detail: "71%",
      icon: <FaGraduationCap />,
    },
    {
      title: "Object Oriented System Development Using UML, Java and Patterns",
      issuer: "NPTEL",
      detail: "65%",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="section-container">
        <h2>Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-icon">
                {certificate.icon}
              </div>

              <div className="certificate-content">
                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                {certificate.detail && (
                  <span className="certificate-detail">
                    {certificate.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;