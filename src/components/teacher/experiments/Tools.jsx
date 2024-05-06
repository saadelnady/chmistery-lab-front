import AddNewTool from "../shared/AddNewTool";

const Tools = ({ isActive, handleActivation }) => {
  return (
    <div className="mt-5">
      {isActive && <AddNewTool handleActivation={handleActivation} />}
      <table className="table w-100 ">
        <thead>
          <th>Name</th>
          <th>Edit </th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
            <td className="fw-bold">Tube</td>
            <td>
              <i className="bi bi-pencil-square fs-3 cursor-pointer"></i>
            </td>
            <td>
              <i className="bi bi-trash3-fill fs-3 cursor-pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn bg-light active" onClick={handleActivation}>
        Add new Tool
      </button>
    </div>
  );
};

export default Tools;
