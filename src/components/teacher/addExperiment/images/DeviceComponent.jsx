import { DndProvider } from "react-dnd";
import DraggableImage from "./DraggableImage";
import { HTML5Backend } from "react-dnd-html5-backend";

const DeviceComponent = ({
  deviceImage,
  parentDiv,
  deviceInputRef,
  toolsImagesPreview,
  handleRemoveDeviceImage,
  draggableImages,
  setDraggableImages,
  handleDeviceImageUpload,
}) => {
  return (
    <div className="col-12 col-sm-6">
      <h3>Device :</h3>
      {deviceImage ? (
        <div ref={parentDiv} className="mt-5 position-relative">
          <img
            src={deviceImage}
            alt="Device"
            className="img-thumbnail bg-transparent "
          />
          <DndProvider backend={HTML5Backend}>
            {toolsImagesPreview.map((image, index) => (
              <DraggableImage
                key={index}
                src={image}
                index={index}
                draggableImages={draggableImages}
                setDraggableImages={setDraggableImages}
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
        ref={deviceInputRef}
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
