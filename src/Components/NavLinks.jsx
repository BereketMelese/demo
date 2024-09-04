import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <NavLink to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Restoran
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <NavLink
            to="/"
            className={`nav-item nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`nav-item nav-link ${
              isActive("/about") ? "active" : ""
            }`}
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={`nav-item nav-link ${
              isActive("/service") ? "active" : ""
            }`}
          >
            Service
          </NavLink>
          <NavLink
            to="/menu"
            className={`nav-item nav-link ${isActive("/menu") ? "active" : ""}`}
          >
            Menu
          </NavLink>
          <div className="nav-item dropdown">
            <Link
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <NavLink
                to="/booking"
                className={`dropdown-item ${
                  isActive("/booking") ? "active" : ""
                }`}
              >
                Booking
              </NavLink>
              <NavLink
                to="/team"
                className={`dropdown-item ${isActive("/team") ? "active" : ""}`}
              >
                Our Team
              </NavLink>
              <NavLink
                to="/testimonial"
                className={`dropdown-item ${
                  isActive("/testimonial") ? "active" : ""
                }`}
              >
                Testimonial
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/contact"
            className={`nav-item nav-link ${
              isActive("/contact") ? "active" : ""
            }`}
          >
            Contact
          </NavLink>
        </div>
        <Link href="#" className="btn btn-primary py-2 px-4">
          Book a Table
        </Link>
      </div>
    </nav>
  );
};

export default NavLinks;
