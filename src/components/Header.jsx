import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaStar,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Gère le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <span className="logo-text">TWS</span>
        </Link>
      </div>
      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isMenuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/skeels" onClick={handleLinkClick}>
            <FaStar /> Skils
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleLinkClick}>
            <FaProjectDiagram /> Projects
          </Link>
        </li>
        <li>
          <Link to="/comments" onClick={handleLinkClick}>
            <FaComments /> Comments
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
