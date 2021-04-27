import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaReact, FaHome, FaBook } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <FaReact style={logoStyle} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home <FaHome style={navStyle} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About <FaBook style={navStyle} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const logoStyle = {
  color: "#0d6efd",
  fontSize: "50",
};

const navStyle = {
  color: "#b23cfd",
  fontSize: "20",
};

export default NavBar;
