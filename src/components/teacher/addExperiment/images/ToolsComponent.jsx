import { useDispatch, useSelector } from "react-redux";
import {
  addExperimentToolImage,
  deleteExperimentToolImage,
} from "../../../../store/actions/experiment/experimentActions";
import { toast } from "react-toastify";

const ToolsComponent = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const dispatch = useDispatch();
  const handleToolImageUpload = (e) => {
    if (experiment?.images?.device?.image) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("photo", file);
      dispatch(addExperimentToolImage(formData));
      e.target.value = "";
    } else {
      e.target.value = "";
      toast.error("please upload device image first");
    }
  };
  const handleRemoveToolImage = (imageId) => {
    dispatch(deleteExperimentToolImage(imageId));
  };

  return (
    <div className="col-12 col-sm-5">
      <h3 className="mb-5">Tools :</h3>
      {(!experiment?.images?.tools ||
        experiment?.images?.tools?.length < 10) && (
        <>
          <label
            htmlFor="tools"
            className="btn active border text-center fw-bold d-flex align-items-center fs-3 "
          >
            <i className="bi bi-cloud-arrow-up text-danger me-3 fs-1"></i>
            Upload Your Tools
          </label>

          <input
            type="file"
            className="d-none"
            id="tools"
            onChange={handleToolImageUpload}
          />
        </>
      )}
      <div className="d-flex flex-wrap align-items-center">
        {experiment?.images?.tools?.map((tool, index) => (
          <div key={index} className="my-4 position-relative fit-content">
            <img
              src={tool?.image || ""}
              alt={`Tool ${index + 1}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <button
              className="btn btn-sm btn-danger position-absolute top-0 end-0"
              onClick={() => handleRemoveToolImage(tool?.imageId)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsComponent;
