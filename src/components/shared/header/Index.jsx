import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
      <NavLink className="fw-bold fs-2 col-md-3 " to="/">
        Virtual Lab
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
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12 d-flex justify-content-md-end">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" href="#">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active btn btn-danger text-light"
              aria-current="page"
              to="/login"
            >
              login
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              className="nav-link active btn btn-danger text-light"
              aria-current="page"
              to="/teacher-register"
            >
              Sign up as teacher
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Index;
