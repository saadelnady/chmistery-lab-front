import React, { useState } from "react";

const AddNewChemical = ({ handleActivation, tableData, setTableData }) => {
  const [newChemical, setNewChemical] = useState({
    name: "",
    color: "",
    shape: "",
  });

  const handleAddNewChemical = () => {
    // Check if any field is empty
    if (!newChemical.name || !newChemical.color || !newChemical.shape) {
      alert("Please fill in all fields");
      return;
    }

    setTableData([...tableData, newChemical]);
    // Reset newChemical state to empty values after adding the new chemical
    setNewChemical({ name: "", color: "", shape: "" });
    handleActivation();
  };

  return (
    <div className="overLay d-flex justify-content-center align-items-center">
      <form className="add-new-chemical bg-light col-12 col-sm-6 col-md-4 rounded py-3 px-2">
        <div className="d-flex justify-content-end">
          <i
            className="bi bi-x-lg cursor-pointer fs-3"
            onClick={handleActivation}
          ></i>
        </div>
        <div className="d-flex flex-column">
          <input
            type="text"
            placeholder="chemical name"
            className="form-control mb-3"
            value={newChemical.name}
            onChange={(e) =>
              setNewChemical({ ...newChemical, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="chemical color"
            className="form-control mb-3"
            value={newChemical.color}
            onChange={(e) =>
              setNewChemical({ ...newChemical, color: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="chemical shape"
            className="form-control mb-3"
            value={newChemical.shape}
            onChange={(e) =>
              setNewChemical({ ...newChemical, shape: e.target.value })
            }
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleAddNewChemical}
          >
            Add chemical
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewChemical;
