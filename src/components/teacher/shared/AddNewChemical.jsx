import { useState } from "react";

const AddNewChemical = ({ handleActivation, tableData, setTableData }) => {
  const [newChemical, setNewChemical] = useState({
    name: "",
    state: "",
    color: "",
    taste: "",
    molecular_formula: "",
    atomic_structure: "",
  });

  const handleAddNewChemical = () => {
    // Check if any field is empty
    // if (!newChemical.name || !newChemical.state || !newChemical.color) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    setTableData([...tableData, newChemical]);
    // Reset newChemical state to empty values after adding the new chemical
    setNewChemical({
      name: "",
      state: "",
      color: "",
      taste: "",
      molecular_formula: "",
      atomic_structure: "",
    });
    handleActivation();
  };

  return (
    <div className="overLay d-flex justify-content-center align-items-center">
      <form className="add-new-chemical bg-light col-12 col-sm-6 col-md-5 rounded py-3 px-2">
        <div className="d-flex justify-content-end">
          <i
            className="bi bi-x-lg cursor-pointer fs-3"
            onClick={handleActivation}
          ></i>
        </div>
        <div className="d-flex flex-column">
          <input
            type="text"
            placeholder="name"
            className="form-control mb-3"
            value={newChemical.name}
            onChange={(e) =>
              setNewChemical({ ...newChemical, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="state"
            className="form-control mb-3"
            value={newChemical.state}
            onChange={(e) =>
              setNewChemical({ ...newChemical, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="color"
            className="form-control mb-3"
            value={newChemical.color}
            onChange={(e) =>
              setNewChemical({ ...newChemical, color: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="taste"
            className="form-control mb-3"
            value={newChemical.shape}
            onChange={(e) =>
              setNewChemical({ ...newChemical, shatastepe: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="molecular formula"
            className="form-control mb-3"
            value={newChemical.shape}
            onChange={(e) =>
              setNewChemical({
                ...newChemical,
                molecular_formula: e.target.value,
              })
            }
          />
          <input
            type="file"
            className="form-control mb-3"
            value={newChemical.shape}
            onChange={(e) =>
              setNewChemical({
                ...newChemical,
                atomic_structure: e.target.value,
              })
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
