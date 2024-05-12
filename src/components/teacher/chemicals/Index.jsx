import { useDispatch, useSelector } from "react-redux";
import AddNewChemical from "../shared/AddNewChemical";
import { deleteChemical } from "../../../store/actions/chemical/chemicalActions";
import { toast } from "react-toastify";
import { useState } from "react";

const Chemicals = ({ isActive, handleActivation }) => {
  const { chemicals } = useSelector((state) => state.chemicalReducer);
  const [chemicalId, setChemicalId] = useState(null);
  const dispatch = useDispatch();
  console.log("chemicalId===>", chemicalId);
  return (
    <div className="mt-5">
      {isActive && (
        <AddNewChemical
          handleActivation={handleActivation}
          chemicalId={chemicalId}
        />
      )}
      {chemicals && chemicals?.length > 0 ? (
        <table className="table w-100 ">
          <thead>
            <th>Name</th>
            <th>Edit </th>
            <th>Delete</th>
          </thead>
          <tbody>
            {chemicals?.map((chemical, index) => (
              <tr key={index}>
                <td className="fw-bold">{chemical.name}</td>
                <td>
                  <i
                    className="bi bi-pencil-square fs-3 cursor-pointer"
                    onClick={() => {
                      setChemicalId(chemical?._id);
                      handleActivation();
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-trash3-fill fs-3 cursor-pointer"
                    onClick={() => {
                      dispatch(deleteChemical(chemical?._id, toast));
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="my-5 fs-1 text-center"> no chemicals to show</p>
      )}

      <button className="btn bg-light active" onClick={handleActivation}>
        Add new chemical
      </button>
    </div>
  );
};

export default Chemicals;
