import React from "react";
import Buttons from "./Buttons";

const Steps = ({ handleTabChange }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3  ">
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        {" "}
        <div className="d-flex px-5">
          <Buttons
            handleTabChange={handleTabChange}
            previous="tools"
            currentTab="steps"
          />
          <button
            className="btn btn-danger mt-3 fs-4 mx-auto"
            // onClick={() => {
            //   addExperiment();
            // }}
          >
            Add experiment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
