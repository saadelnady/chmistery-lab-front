import React from "react";
import Buttons from "./Buttons";

const Steps = ({ handleTabChange }) => {
  return (
    <div className="shadow">
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
  );
};

export default Steps;
