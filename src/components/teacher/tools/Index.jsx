import { useDispatch, useSelector } from "react-redux";
import AddNewTool from "../shared/AddNewTool";
import {
  clearTool,
  deleteTool,
} from "../../../store/actions/tools/toolActions";
import { toast } from "react-toastify";
import { useState } from "react";

const Tools = ({ isActive, handleActivation }) => {
  const dispatch = useDispatch();
  const { tools } = useSelector((state) => state.toolReducer);
  const [toolId, setToolId] = useState(null);

  const handleToolId = () => {
    setToolId(null);
    dispatch(clearTool());
  };

  return (
    <div className="mt-5">
      {isActive && (
        <AddNewTool
          handleActivation={handleActivation}
          toolId={toolId}
          handleToolId={handleToolId}
        />
      )}
      {tools && tools?.length > 0 ? (
        <table className="table w-100 ">
          <thead>
            <th>Name</th>
            <th>Edit </th>
            <th>Delete</th>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <tr key={index}>
                <td className="fw-bold">{tool.name}</td>
                <td>
                  <i
                    className="bi bi-pencil-square fs-3 cursor-pointer"
                    onClick={() => {
                      setToolId(tool?._id);
                      handleActivation();
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-trash3-fill fs-3 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteTool(tool?._id, toast));
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="my-5 fs-1 text-center"> no tools to show</p>
      )}

      <button className="btn bg-light active" onClick={handleActivation}>
        Add new Tool
      </button>
    </div>
  );
};

export default Tools;
