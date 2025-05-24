import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaStar,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <span className="logo-text">TWS</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            {" "}
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/skeels">
            {" "}
            <FaStar /> Skils
          </Link>
        </li>
        <li>
          <Link to="/project">
            {" "}
            <FaProjectDiagram /> Projects
          </Link>
        </li>
        <li>
          <Link to="/comments">
            {" "}
            <FaComments /> Comments
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {" "}
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
