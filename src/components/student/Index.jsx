import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-evenly align-items-center flex-column">
      <h2>Student Mode</h2>
      <ul className="d-flex flex-column shadow p-4 rounded">
        <NavLink to="/student/experiment" className="btn active mb-3 ">
          <li> Experiment 1</li>
        </NavLink>
        <NavLink to="/student/experiment" className="btn active mb-3 ">
          <li> Experiment 2</li>
        </NavLink>
        <NavLink to="/student/experiment" className="btn active mb-3 ">
          <li> Experiment 3</li>
        </NavLink>
        <NavLink to="/student/experiment" className="btn active mb-3 ">
          <li> Experiment 4</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Index;
