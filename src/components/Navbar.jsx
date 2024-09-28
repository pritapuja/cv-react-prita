import { useState } from "react";
import { Link } from "react-router-dom"; // Tambahkan import ini

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed-top" id="mainNav">
      <nav id="desktop-nav">
        <div className="logo">
          <Link to="/" onClick={toggleMenu}>
            Prita Puja Astuti
          </Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">
          <Link to="/" onClick={toggleMenu}>
            Prita Puja Astuti
          </Link>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
