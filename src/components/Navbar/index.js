import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <NavLink to="/" className='navbar-brand'>Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink to="/" className='nav-link' activeClassName="active">Home</NavLink>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          </li>
          <li className="nav-item">
          <NavLink to="/adduserinfo" className='nav-link' activeClassName="active">Add Users</NavLink>
            {/* <a className="nav-link" href="#">Features</a> */}
          </li>
          <li className="nav-item">
          <NavLink to="/aboutus" className='nav-link' >Pricing</NavLink>
            {/* <a className="nav-link" href="#">Pricing</a> */}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Outlet />
  </>
  )
}

export default Navbar;


