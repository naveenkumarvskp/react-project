import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Footer } from "../Footer";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <header id="header" className="nav-bar fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink to="/" className="navbar-brand">
              React Redux Saga
            </NavLink>
          </h1>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="">
              <button
                className="navbar-toggler mb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/adduserinfo"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Add Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/aboutus" className="nav-link">
                      About us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="below-header">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Navbar;
