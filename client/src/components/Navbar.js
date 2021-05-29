import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow sticky-top py-1 px-4 navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex align-items-center mx-0 p-1 justify-content-between">
        <div>
          <h3>BankBranches</h3>
        </div>
        <div>
          <NavLink
            className="nav-link"
            to="/"
            exact={true}
            style={{ color: "#343a40" }}
            activeStyle={{ color: "#17a2b8" }}
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
