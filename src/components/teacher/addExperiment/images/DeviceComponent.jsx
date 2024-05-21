import { DndProvider } from "react-dnd";
import DraggableImage from "./DraggableImage";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperimentDeviceImage,
  deleteExperimentDeviceImage,
} from "../../../../store/actions/experiment/experimentActions";
import { useEffect, useRef } from "react";

const DeviceComponent = ({
  toolsImagesPreview,
  draggableImages,
  setDraggableImages,
}) => {
  const { experimentImages } = useSelector((state) => state.experimentReducer);
  const dispatch = useDispatch();
  const parentDiv = useRef(null);
  const handleRemoveDeviceImage = () => {
    dispatch(deleteExperimentDeviceImage(experimentImages?.device?.imageId));
  };
  const handleDeviceImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);
    dispatch(addExperimentDeviceImage(formData));
    e.target.value = "";
  };

  useEffect(
    () => {
      const handleResize = () => {
        if (parentDiv.current) {
          const { clientWidth, clientHeight } = parentDiv.current;
          // setImages((prevImages) => ({
          //   ...prevImages,
          //   device: {
          //     ...prevImages.device,
          //     dimensions: {
          //       ...prevImages.device.dimensions,
          //       width: clientWidth,
          //       height: clientHeight,
          //     },
          //   },
          // }));
        }
      };
      handleResize();
      // Event listener for window resize
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    [
      // deviceImage
    ]
  );

  return (
    <div className="col-12 col-sm-6">
      <h3>Device :</h3>
      {experimentImages?.device?.image ? (
        <div ref={parentDiv} className="mt-5 position-relative">
          <img
            src={experimentImages?.device?.image || ""}
            alt="Device"
            className="img-thumbnail bg-transparent"
          />
          <DndProvider backend={HTML5Backend}>
            {experimentImages?.tools?.map((tool, index) => (
              <DraggableImage
                key={index}
                src={tool?.image}
                index={index}
                draggableImages={draggableImages}
                // setDraggableImages={setDraggableImages}
              />
            ))}
          </DndProvider>
          <button
            className="btn btn-sm btn-danger position-absolute top-0 end-0"
            onClick={handleRemoveDeviceImage}
          >
            X
          </button>
        </div>
      ) : (
        <label
          htmlFor="device"
          className="btn active border text-center fw-bold d-flex align-items-center fs-3 mt-4"
        >
          <i className="bi bi-cloud-arrow-up text-danger me-3 fs-1"></i>
          Upload Device Image
        </label>
      )}
      <input
        type="file"
        className="d-none"
        accept="image/jpeg, image/png" // Specify accepted MIME types here
        id="device"
        onChange={handleDeviceImageUpload}
      />
    </div>
  );
};

export default DeviceComponent;
