import { useState } from "react";

const AddNewTool = ({ handleActivation, tableData, setTableData }) => {
  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleAddNewTool = () => {
    // Check if any field is empty
    // if (!newChemical.name || !newChemical.state || !newChemical.color) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    setTableData([...tableData, newTool]);
    // Reset newChemical state to empty values after adding the new chemical
    setNewTool({
      name: "",
      description: "",
      image: "",
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
            value={newTool.name}
            onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="description"
            className="form-control mb-3"
            value={newTool.description}
            onChange={(e) => setNewTool({ ...newTool, state: e.target.value })}
          />

          <input
            type="file"
            className="form-control mb-3"
            value={newTool.shape}
            onChange={(e) =>
              setNewTool({
                ...newTool,
                atomic_structure: e.target.value,
              })
            }
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleAddNewTool}
          >
            Add Tool
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTool;
