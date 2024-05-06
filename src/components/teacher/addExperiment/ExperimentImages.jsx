import { useRef, useState } from "react";
import Buttons from "./Buttons";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ExperimentImages = ({ handleTabChange }) => {
  const [toolsImages, setToolsImages] = useState([]);
  const [deviceImage, setDeviceImage] = useState("");
  const deviceInputRef = useRef(null);
  const toolsInputRef = useRef(null);

  const handleToolImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setToolsImages((prevImages) => [...prevImages, ...urls]);
    toolsInputRef.current.value = ""; // Clear the tools input field
  };

  const handleRemoveToolImage = (index) => {
    const updatedImages = [...toolsImages];
    updatedImages.splice(index, 1);
    setToolsImages(updatedImages);
  };
  const handleDeviceImageUpload = (e) => {
    const file = e.target.files[0];
    setDeviceImage(URL.createObjectURL(file));
  };
  const handleRemoveDeviceImage = () => {
    setDeviceImage("");
    deviceInputRef.current.value = "";
  };

  // ========================================================
  const DraggableImage = ({ src }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "image",
      item: { src },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [{ isOver }, drop] = useDrop({
      accept: "image",
      drop: (item, monitor) => handleDrop(item), // Call handleDrop when an image is dropped
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    const handleDrop = (item) => {
      console.log("item ==>", item);
      // Update state or perform actions based on the dropped item
    };

    return (
      <div
        ref={(node) => drag(drop(node))} // Combine drag and drop refs
        style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
        className={`tool position-absolute top-0 start-0 text-center fs-3 rounded ${
          isOver ? "bg-info" : ""
        }`}
      >
        <img src={src} alt="" />
      </div>
    );
  };

  return (
    <div className="row mt-4 py-3 px-2 shadow justify-content-between">
      <div className="py-4 px-2 rounded border col-12 col-sm-5">
        <h3>Tools :</h3>
        {toolsImages.length < 10 && (
          <>
            <label
              htmlFor="tools"
              className="btn active border text-center fw-bold d-flex align-items-center fs-3 mt-4"
            >
              <i className="bi bi-cloud-arrow-up text-danger me-3 fs-1"></i>
              Upload Your Tools
            </label>

            <input
              ref={toolsInputRef}
              type="file"
              className="d-none"
              id="tools"
              onChange={handleToolImageUpload}
              multiple
            />
          </>
        )}
        <div className="d-flex flex-wrap align-items-center">
          {toolsImages.map((image, index) => (
            <div key={index} className="my-4 position-relative fit-content">
              <img
                src={image}
                alt={`Tool ${index + 1}`}
                className="cursor-pointer"
              />
              <button
                className="btn btn-sm btn-danger position-absolute top-0 end-0"
                onClick={() => handleRemoveToolImage(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 px-2 rounded border col-12 col-sm-6">
        <h3>Device :</h3>
        {deviceImage ? (
          <DndProvider backend={HTML5Backend}>
            <div className="mt-5 position-relative parent">
              <img
                src={deviceImage}
                alt="Device"
                className="img-thumbnail bg-transparent"
              />

              {toolsImages.map((image, index) => (
                //  <p className="text-end">{index + 1}</p>
                //      <img src={image} alt="" />
                <DraggableImage key={index} src={image} />
              ))}
              <button
                className="btn btn-sm btn-danger position-absolute top-0 end-0"
                onClick={() => {
                  handleRemoveDeviceImage();
                }}
              >
                X
              </button>
            </div>
          </DndProvider>
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
      <Buttons
        handleTabChange={handleTabChange}
        next="chemicals"
        previous="general"
      />
    </div>
  );
};

export default ExperimentImages;
