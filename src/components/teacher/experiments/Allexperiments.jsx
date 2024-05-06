import React from "react";
import { NavLink } from "react-router-dom";

const Allexperiments = () => {
  return (
    <div className="mt-5">
      <table className="table w-100">
        <thead>
          <th>Name</th>
          <th>Edit </th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
            <td className="fw-bold">White Smoke Experiment</td>
            <td>
              <i className="bi bi-pencil-square fs-3 cursor-pointer"></i>
            </td>
            <td>
              <i className="bi bi-trash3-fill fs-3 cursor-pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <NavLink to="/teacher/add-experiment">
        <button className="btn bg-light active">Add new experiment</button>
      </NavLink>
    </div>
  );
};

export default Allexperiments;
