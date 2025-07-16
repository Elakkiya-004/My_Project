import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'experience', 'skills','projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : 'transparent'} custom-navbar`}>
      <div className="container justify-content-center">
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav gap-4">
            {['home', 'experience','skills','projects','contact'].map((id) => (
              <li className="nav-item" key={id}>
                <button
                  className={`nav-link btn btn-link ${activeSection === id ? 'active-link' : ''}`}
                  onClick={() => handleScroll(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
