import { DndProvider } from "react-dnd";
import DraggableImage from "./DraggableImage";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperimentDeviceImage,
  deleteExperimentDeviceImage,
} from "../../../../store/actions/experiment/experimentActions";
import { useEffect, useRef } from "react";
import { setDeviceDimensions } from "../../../../store/actions/experiment/experimentActionsCreators";

const DeviceComponent = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const dispatch = useDispatch();
  const parentDiv = useRef(null);
  const deviceImgRef = useRef(null);
  const handleRemoveDeviceImage = () => {
    console.log("experiment?.images?.device?.imageId", experiment?.images);
    dispatch(deleteExperimentDeviceImage(experiment?.images?.device?.imageId));
  };
  const handleDeviceImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);
    dispatch(addExperimentDeviceImage(formData));
    e.target.value = "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (parentDiv.current && deviceImgRef.current) {
        const { clientWidth } = parentDiv.current;
        const { clientHeight } = deviceImgRef.current;
        dispatch(setDeviceDimensions(clientWidth, clientHeight));
      }
    };

    if (experiment?.images?.device?.image) {
      const img = new Image();
      img.src = experiment?.images?.device.image;
      img.onload = () => {
        setTimeout(handleResize, 0);
      };
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, experiment?.images?.device?.image]);

  console.log(experiment);
  return (
    <div className="col-12 col-sm-6">
      <h3>Device :</h3>
      {experiment?.images?.device?.image ? (
        <div
          ref={parentDiv}
          className="mt-5 position-relative"
          // style={{
          //   width: experiment?.images?.device?.dimensions?.width,
          //   height: experiment?.images?.device?.dimensions?.height,
          // }}
        >
          <img
            ref={deviceImgRef}
            src={experiment?.images?.device?.image || ""}
            alt="Device"
            className="img-thumbnail bg-transparent w-100 p-0"
          />
          <DndProvider backend={HTML5Backend}>
            {experiment?.images?.tools?.map((tool, index) => (
              <DraggableImage
                key={index}
                src={tool?.image}
                index={index}
                tool={tool}
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
