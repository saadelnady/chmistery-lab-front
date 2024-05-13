import React from "react";
import { NavLink } from "react-router-dom";
import { addExperiment } from "../../../store/actions/experiment/experimentActions";
import { useDispatch } from "react-redux";

const Allexperiments = () => {
  const dispatch = useDispatch();
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
              <NavLink to="/teacher/add-experiment">
                <i className="bi bi-pencil-square fs-3 cursor-pointer"></i>
              </NavLink>{" "}
            </td>
            <td>
              <i className="bi bi-trash3-fill fs-3 cursor-pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        className="btn bg-light active"
        onClick={() => {
          dispatch(addExperiment());
        }}
      >
        Add new experiment
      </button>
    </div>
  );
};

export default Allexperiments;
