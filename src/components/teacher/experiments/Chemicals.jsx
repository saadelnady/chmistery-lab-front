import AddNewChemical from "../shared/AddNewChemical";

const Chemicals = ({ isActive, handleActivation }) => {
  return (
    <div className="mt-5">
      {isActive && <AddNewChemical handleActivation={handleActivation} />}
      <table className="table w-100 ">
        <thead>
          <th>Name</th>
          <th>Edit </th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
            <td className="fw-bold">H2so4</td>
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
        Add new chemical
      </button>
    </div>
  );
};

export default Chemicals;
