import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Rajini Pathivada</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;