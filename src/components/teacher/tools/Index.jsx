import { useDispatch, useSelector } from "react-redux";
import AddNewTool from "../shared/AddNewTool";
import { deleteTool } from "../../../store/actions/tools/toolActions";
import { toast } from "react-toastify";

const Tools = ({ isActive, handleActivation }) => {
  const { tools } = useSelector((state) => state.toolReducer);
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      {isActive && <AddNewTool handleActivation={handleActivation} />}
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
                  <i className="bi bi-pencil-square fs-3 cursor-pointer"></i>
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
