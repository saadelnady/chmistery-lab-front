import React, { useState } from "react";

const Tools = ({ handleTabChange }) => {
  const equipmentOptions = [
    { value: "balance", label: "Balance" },
    { value: "holder", label: "Holder" },
    { value: "filter paper", label: "Filter Paper" },
    { value: "rectangle glass", label: "Rectangle Glass" },
    { value: "plastic funnel", label: "Plastic Funnel" },
    { value: "empty vial", label: "Empty Vial" },
    { value: "glass bottel with stopper", label: "Glass Bottle with Stopper" },
  ];

  const [selectedtoolList, setSelectedToolList] = useState([]);

  const handleToolChange = (event) => {
    const selectedtool = event.target.value;
    if (selectedtool && !selectedtoolList.includes(selectedtool)) {
      setSelectedToolList([...selectedtoolList, selectedtool]);
    }
  };

  const handleRemoveTool = (index) => {
    const updatedtoolList = [...selectedtoolList];
    updatedtoolList.splice(index, 1);
    setSelectedToolList(updatedtoolList);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        <h3 className="text-center fw-bold"> Choose your tools</h3>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <select
            id="dropdown"
            className="form-control"
            onChange={handleToolChange}
            value=""
          >
            <option value="" disabled>
              Select tool
            </option>
            {equipmentOptions.map(({ value, label }, index) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button
            className="btn btn-danger col-3 fs-5"
            // onClick={handleActivation}
          >
            Add new Tool
          </button>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>tool Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedtoolList.map((equipment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{equipment}</td>
                <td>description</td>
                <td>
                  <i
                    className="bi bi-trash3-fill fs-3 cursor-pointer"
                    onClick={() => handleRemoveTool(index)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex">
          <button
            className="btn btn-danger mt-3 fs-4 mx-auto"
            onClick={() => {
              handleTabChange("chemicals");
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn btn-danger mt-3 fs-4 mx-auto"
            onClick={() => {
              handleTabChange("steps");
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
