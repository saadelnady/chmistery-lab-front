import React from "react";

const Steps = ({ handleTabChange }) => {
  return (
    <div>
      Steps
      <div>
        <div className="d-flex">
          <button
            className="btn btn-danger mt-3 fs-4 mx-auto"
            onClick={() => {
              handleTabChange("tools");
            }}
          >
            <i class="bi bi-chevron-left"></i>
          </button>
          <input
            value="Add experiment"
            className="btn btn-danger mt-3 fs-4 mx-auto"
            onClick={() => {
              handleTabChange("steps");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
