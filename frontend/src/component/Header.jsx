import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginPage from "./Login";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    closeNavbar(); // Close the navbar when login is clicked
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-light">
        {/* ...navbar content... */}
        <div className="container">
          {/* Logo image on the left */}
          <NavLink className="navbar-brand" to="/" exact>
            {/* <img
              src="src/component/Images/logonavbar.png"
              height="20"
              alt="Logo"
            /> */}
  <img
              src="src/component/Images/logonavbar.png"
              height="20"
              width="auto" // Set width to auto or a specific value
              alt="Logo"
              className="navbar-logo" // Add a class for styling
            />

          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarNav"
          >
            {/* Centered navigation links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/WhereToFly"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Where To Fly
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Packages"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/CheckBooking"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  CheckBooking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/About"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  About
                </NavLink>
              </li>
            </ul>{" "}
          </div>
          <div className="text-end">
            <button
              onClick={handleLoginClick}
              className="btn btn-outline-secondary"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      {showLogin && <LoginPage onClose={handleCloseLogin} />}{" "}
      {/* Render LoginPage if showLogin state is true */}
    </>
  );
};

export default Header;
