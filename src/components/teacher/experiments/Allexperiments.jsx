import React from "react";
import { NavLink } from "react-router-dom";
import {
  addExperiment,
  deleteExperiment,
} from "../../../store/actions/experiment/experimentActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Allexperiments = () => {
  const { experiments } = useSelector((state) => state.experimentReducer);
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
          {experiments &&
            experiments.length > 0 &&
            experiments.map((experiment, index) => (
              <tr key={index}>
                <td className="fw-bold">{experiment?.name}</td>
                <td>
                  <NavLink to={`/teacher/add-experiment/${experiment._id}`}>
                    <i className="bi bi-pencil-square fs-3 cursor-pointer"></i>
                  </NavLink>
                </td>
                <td>
                  <i
                    className="bi bi-trash3-fill fs-3 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteExperiment(experiment._id, toast));
                    }}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button
        className="btn bg-light active"
        onClick={() => {
          dispatch(addExperiment(toast));
        }}
      >
        Add new experiment
      </button>
    </div>
  );
};

export default Allexperiments;
