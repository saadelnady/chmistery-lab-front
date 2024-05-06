import React, { useState } from "react";
import AddNewChemical from "../shared/AddNewChemical";
import Buttons from "./Buttons";

const Chemicals = ({ handleTabChange, isActive, handleActivation }) => {
  const chemicals = [
    { name: "Water" },
    { name: "NH4CL" },
    { name: "NH3" },
    { name: "AgNo3" },
    { name: "Dilute H2so4" },
    { name: "Soap" },
    { name: "NaCl" },
  ];

  const [selectedChemical, setSelectedChemical] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleSelectChange = (event) => {
    const selectedOption = chemicals.find(
      (chemical) => chemical.name === event.target.value
    );
    setSelectedChemical(selectedOption);
    if (selectedOption && !tableData.includes(selectedOption)) {
      setTableData([...tableData, selectedOption]);
    }
  };
  const handleRemoveChemical = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  const handleShowDescription = (chemical) => {
    // Implement functionality to show chemical description
    console.log("Description for", chemical.name);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      {isActive && (
        <AddNewChemical
          handleActivation={handleActivation}
          tableData={tableData}
          setTableData={setTableData}
        />
      )}
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        <h3 className="text-center fw-bold">Choose your chemicals</h3>
        <div className="d-flex justify-content-between mt-4">
          <select
            name="chemical"
            id="chemical"
            className="form-control"
            value={selectedChemical ? selectedChemical.name : ""}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select chemical
            </option>

            {chemicals.map((chemical, index) => (
              <option key={index} value={chemical.name}>
                {chemical.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-danger col-3 fs-5"
            onClick={handleActivation}
          >
            Add new chemical
          </button>
        </div>

        <table className="col-12 table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Chemical name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((chemical, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{chemical.name}</td>
                <td>
                  <i
                    className="bi bi-info-circle fs-3 cursor-pointer"
                    onClick={() => handleShowDescription(chemical)}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-trash3-fill fs-3 cursor-pointer"
                    onClick={() => handleRemoveChemical(index)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Buttons
          handleTabChange={handleTabChange}
          previous="images"
          next="tools"
        />
      </div>
    </div>
  );
};

export default Chemicals;
