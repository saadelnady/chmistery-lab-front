import React, { useEffect, useState } from "react";
import AddNewChemical from "../shared/AddNewChemical";
import { useDispatch, useSelector } from "react-redux";
import ChemicalDescription from "../shared/ChemicalDescription";
import { toast } from "react-toastify";
import { editExperiment } from "../../../store/actions/experiment/experimentActions";
import { useParams } from "react-router-dom";
import { isObjectNotEmpty } from "../../../helpers/object_checker";
import Loading from "../../shared/Loading";
const Chemicals = ({
  isActive,
  handleActivation,
  isDescription,
  handleDescription,
}) => {
  const { chemicals } = useSelector((state) => state.chemicalReducer);
  const { experiment, isLoading } = useSelector(
    (state) => state.experimentReducer
  );
  const [selectedChemical, setSelectedChemical] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [chemical, setChemical] = useState({});
  const selectedChemicalsIds = tableData.map((chemical) => chemical?._id);
  const dispatch = useDispatch();
  const { experimentId } = useParams();

  const handleSelectChange = (event) => {
    const selectedOption = chemicals.find(
      (chemical) => chemical?.name === event?.target?.value
    );
    setSelectedChemical(selectedOption);
    if (selectedOption) {
      setTableData([...tableData, selectedOption]);
      // if (
      //   !tableData.some((chemical) => chemical.name === selectedOption.name)
      // ) {
      // } else {
      //   toast.error("Chemical is already selected");
      // }
    }
    event.target.value = "";
  };
  const handleRemoveChemical = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  const handleEditChemicals = () => {
    if (selectedChemicalsIds?.length === 0) {
      toast.error(`please select one chemical at least`);
    } else {
      dispatch(
        editExperiment(experimentId, { chemicals: selectedChemicalsIds }, toast)
      );
    }
  };
  useEffect(() => {
    if (isObjectNotEmpty(experiment)) {
      setTableData(experiment?.chemicals);
    }
  }, [experiment]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      {isActive && <AddNewChemical handleActivation={handleActivation} />}
      {isDescription && (
        <ChemicalDescription
          handleDescription={handleDescription}
          chemical={chemical}
        />
      )}
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        <h3 className="text-center fw-bold">Choose your chemicals</h3>
        <div className="d-flex justify-content-between mt-4 align-items-center">
          <select
            name="chemical"
            id="chemical"
            className="form-control w-75"
            value={selectedChemical ? selectedChemical?.name : ""}
            onChange={handleSelectChange}
          >
            <option value="">Select chemical</option>

            {chemicals.map((chemical, index) => (
              <option key={index} value={chemical?.name}>
                {chemical?.name}
              </option>
            ))}
          </select>
          <button className="btn btn-danger " onClick={handleActivation}>
            Add new chemical
          </button>
        </div>

        <table className="col-12 table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Chemical name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((chemical, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{chemical?.name}</td>
                  <td>
                    <i
                      className="bi bi-info-circle fs-3 cursor-pointer"
                      onClick={() => {
                        handleDescription();
                        setChemical(chemical);
                      }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-trash3-fill fs-3 cursor-pointer"
                      onClick={() => handleRemoveChemical(index)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn active mt-4" onClick={handleEditChemicals}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Chemicals;
