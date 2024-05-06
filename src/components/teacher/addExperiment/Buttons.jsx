import React from "react";

const Buttons = ({ handleTabChange, next, previous, currentTab }) => {
  return (
    <div className="d-flex">
      {currentTab !== "general" && (
        <button
          className="btn btn-danger mt-3 fs-4 mx-auto"
          onClick={() => {
            handleTabChange(previous);
          }}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      )}

      {currentTab !== "steps" && (
        <button
          className="btn btn-danger mt-3 fs-4 mx-auto"
          onClick={() => {
            handleTabChange(next);
          }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default Buttons;
