import React, { useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { logotext } from "../content_option";
import { VscGrabber, VscClose } from "react-icons/vsc";

const Headermain = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between header__inner">
          <Link className="navbar-brand nav_ac" to="/" onClick={closeMenu}>
            {logotext}
          </Link>

          {/* Desktop nav */}
          <nav className="d-none d-md-flex align-items-center">
            <ul className="nav__links d-flex align-items-center">
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile controls */}
          <div className="d-flex d-md-none align-items-center">
            <button className="menu__button" onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div className={`mobile__menu ${menuOpen ? "mobile__menu--open" : ""}`}>
        <nav className="mobile__menu-nav">
          <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/portfolio" onClick={closeMenu} className={location.pathname === "/portfolio" ? "active" : ""}>
            Projects
          </Link>
          <Link to="/about" onClick={closeMenu} className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu} className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Headermain;
