import React, { useEffect, useState } from "react";
import AddNewTool from "../shared/AddNewTool";
import { useDispatch, useSelector } from "react-redux";
import ToolDescription from "../shared/ToolDescription";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { editExperiment } from "../../../store/actions/experiment/experimentActions";
import { isObjectNotEmpty } from "../../../helpers/object_checker";
import Loading from "../../shared/Loading";

const Tools = ({
  isActive,
  handleActivation,
  isDescription,
  handleDescription,
}) => {
  const { tools } = useSelector((state) => state.toolReducer);
  const { experiment, isLoading } = useSelector(
    (state) => state.experimentReducer
  );
  const [tool, setTool] = useState({});
  const [selectedTools, setSelectedTools] = useState([]); // Changed state name to plural
  const [selectedTool, setSelectedTool] = useState(""); // Changed state name to plural
  const selectedToolsIds = selectedTools.map((tool) => tool._id);
  const dispatch = useDispatch();
  const { experimentId } = useParams();

  const handleToolChange = (event) => {
    const selectedOption = tools.find(
      (tool) => tool.name === event.target.value
    );
    setSelectedTools([...selectedTools, selectedOption]);
    setSelectedTool(selectedOption.name);

    // if (selectedOption) {
    //   if (!selectedTools.some((tool) => tool.name === selectedOption.name)) {
    //   } else {
    //     toast.error("tool is already selected");
    //   }
    // }
    event.target.value = "";
  };

  useEffect(() => {
    if (isObjectNotEmpty(experiment)) {
      setSelectedTools(experiment.tools);
    }
  }, [experiment]);
  const handleRemoveTool = (index) => {
    const updatedToolList = [...selectedTools];
    updatedToolList.splice(index, 1);
    setSelectedTools(updatedToolList);
  };
  const handleEditTools = () => {
    if (selectedToolsIds.length === 0) {
      toast.error(`please select one tool at least`);
    } else {
      dispatch(
        editExperiment(experimentId, { tools: selectedToolsIds }, toast)
      );
    }
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      {isActive && <AddNewTool handleActivation={handleActivation} />}
      {isDescription && (
        <ToolDescription handleDescription={handleDescription} tool={tool} />
      )}
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        <h3 className="text-center fw-bold">Choose your tools</h3>
        <div className="d-flex justify-content-between mt-4">
          <select
            id="dropdown"
            className="form-control w-75"
            onChange={handleToolChange}
            value={selectedTool}
          >
            <option value="">Select tool</option>
            {tools.map((tool, index) => (
              <option key={index} value={tool.name}>
                {tool.name}
              </option>
            ))}
          </select>
          <button className="btn btn-danger " onClick={handleActivation}>
            Add new Tool
          </button>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Tool Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedTools.map((tool, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{tool.name}</td>
                <td>
                  <i
                    className="bi bi-info-circle fs-3 cursor-pointer"
                    onClick={() => {
                      setTool(tool);
                      handleDescription();
                    }}
                  ></i>
                </td>
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
        <button className="btn active mt-4" onClick={handleEditTools}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Tools;
