import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  function handleScroll() {
    const shouldAddPadding = window.scrollY > 50;
    if (shouldAddPadding !== hasScrolled) {
      setHasScrolled(shouldAddPadding);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${hasScrolled ? "" : "py-4"}`}>
        <div className="container">
          <NavLink
            className="navbar-brand text-uppercase text-white fw-bold fs-3"
            to="/"
          >
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
