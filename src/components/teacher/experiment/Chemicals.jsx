import React, { useState } from "react";

const Chemicals = () => {
  const chemicals = [
    "Water",
    "NH4CL",
    "NH3",
    "AgNo3",
    "Dilute H2so4",
    "Soap",
    "NaCl",
  ];

  const [selectedChemical, setSelectedChemical] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedChemical(selectedOption);
    if (selectedOption && !tableData.includes(selectedOption)) {
      setTableData([...tableData, selectedOption]);
    }
  };

  const handleRemoveChemical = (chemicalToRemove) => {
    const updatedData = tableData.filter(
      (chemical) => chemical !== chemicalToRemove
    );
    setTableData(updatedData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        <h3 className="text-center fw-bold">Choose your chemicals</h3>
        <div className="d-flex justify-content-between mt-4">
          <select
            name="chemical "
            id="chemical"
            className="form-control "
            value={selectedChemical}
            onChange={handleSelectChange}
          >
            <option value="">Select chemical</option>
            {chemicals.map((chemical, index) => (
              <option key={index} value={chemical}>
                {chemical}
              </option>
            ))}
          </select>
          <button className="btn btn-danger col-3 fs-5">
            Add new chemical
          </button>
        </div>

        <table className="col-12 mt-3">
          <thead>
            <tr>
              <th>Chemical name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((chemical, index) => (
              <tr key={index}>
                <td>{chemical}</td>
                <td>
                  <button className="btn btn-danger">show description </button>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveChemical(chemical)}
                    className="btn"
                  >
                    <i class="bi bi-trash3-fill fs-3"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chemicals;
