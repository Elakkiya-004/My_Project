import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = ["home", "experience", "skills", "projects", "contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false); // close mobile menu on click
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
        }
      }
      setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // put resume.pdf in public folder
    link.download = "Elakkiya_Resume.pdf";
    link.click();
  };

  return (
    <nav className={`navbar fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Desktop Menu */}
        <ul className="nav-links">
          {sections.map((id) => (
            <li key={id}>
              <button
                className={`nav-link ${
                  activeSection === id ? "active" : ""
                }`}
                onClick={() => handleScroll(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        {/* <button className="resume-btn" onClick={handleResumeDownload}>
          Download Resume
        </button> */}

        <div
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul>
            {sections.map((id) => (
              <li key={id}>
                <button
                  className={`nav-link ${
                    activeSection === id ? "active" : ""
                  }`}
                  onClick={() => handleScroll(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
            {/* <li>
              <button className="resume-btn" onClick={handleResumeDownload}>
                Download Resume
              </button>
            </li> */}
          </ul>
        </div>

        {/* Mobile Overlay to close menu */}
        {mobileMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
