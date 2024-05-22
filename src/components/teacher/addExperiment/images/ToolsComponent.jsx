import { useDispatch, useSelector } from "react-redux";
import {
  addExperimentToolImage,
  deleteExperimentToolImage,
} from "../../../../store/actions/experiment/experimentActions";

const ToolsComponent = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const dispatch = useDispatch();
  const handleToolImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);
    dispatch(addExperimentToolImage(formData));
    e.target.value = "";

    // const urls = files.map((file) => URL.createObjectURL(file));
    // setToolsImagesPreview((prevImages) => [...prevImages, ...urls]);

    // setImages((prevImages) => ({
    //   ...prevImages,
    //   tools: [
    //     ...prevImages.tools,
    //     {
    //       order: prevImages.tools.length,
    //       image: "",
    //       position: {
    //         x: "100px",
    //         y: "100px",
    //       },
    //       dimensions: {
    //         width: "100px",
    //         height: "100px",
    //       },
    //     },
    //   ],
    // }));

    // const currentDraggableImages = [
    //   ...draggableImages,
    //   {
    //     position: {
    //       x: 0,
    //       y: 0,
    //     },
    //     dimensions: {
    //       width: 100,
    //       height: 100,
    //     },
    //   },
    // ];
    // setDraggableImages(currentDraggableImages);
    // toolsInputRef.current.value = ""; // Clear the tools input field
  };
  const handleRemoveToolImage = (imageId) => {
    console.log(imageId);
    dispatch(deleteExperimentToolImage(imageId));
  };

  return (
    <div className="col-12 col-sm-5">
      <h3>Tools :</h3>
      {(!experiment?.images?.tools ||
        experiment?.images?.tools?.length < 10) && (
        <>
          <label
            htmlFor="tools"
            className="btn active border text-center fw-bold d-flex align-items-center fs-3 mt-4"
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
