
import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "rajinipathivada40@gmail.com",
      link: "mailto:rajinipathivada40@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 8074293159",
      link: "tel:+918074293159",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Vizianagaram, Andhra Pradesh",
      link: null,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Rajini Pathivada",
      link: "https://www.linkedin.com/in/rajini-pathivada-43a887305/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Rajini-Pathivada",
      link: "https://github.com/Rajini-Pathivada",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2>Contact</h2>

        <p className="contact-intro">
          I'm currently looking for opportunities to start my career as a
          Java Full Stack Developer. Feel free to get in touch with me.
        </p>

        <div className="contact-grid">
          {contactItems.map((item) => (
            <div className="contact-item" key={item.label}>
              <div className="contact-icon">
                {item.icon}
              </div>

              <div className="contact-content">
                <p className="contact-label">{item.label}</p>

                {item.link ? (
                  <a
                    href={item.link}
                    target={
                      item.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.link.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                  >
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-footer">
          <p>© 2026 Rajini Pathivada. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
