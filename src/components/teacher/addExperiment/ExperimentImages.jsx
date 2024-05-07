import React, { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import { DndProvider, useDrag } from "react-dnd";
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const { clientWidth, clientHeight } = divRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };
    console.log(dimensions);
    // Initial dimensions
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceImage]);

  // ========================================================
  const DraggableImage = ({ src }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "image",
      item: { src, offset: { x: 0, y: 0 } },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

    const handleDragStart = (e) => {
      e.stopPropagation(); // Stop event bubbling
      e.dataTransfer.setData("text/plain", ""); // Necessary for drag to work
      const rect = e.target.getBoundingClientRect(); // Get the position of the draggable element
      setInitialPosition({ x: rect.left, y: rect.top });
    };

    const handleDrop = (e) => {
      e.preventDefault();
      const offsetX = e.clientX - initialPosition.x;
      const offsetY = e.clientY - initialPosition.y;
      setPosition({ x: offsetX, y: offsetY });
    };

    return (
      <div
        ref={drag}
        onDragStart={handleDragStart}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{
          cursor: "move",
          position: "absolute",
          top: position.y,
          left: position.x,
          zIndex: isDragging ? 100 : 1,
          opacity: isDragging ? 0.5 : 1,
          resize: "both",
          overflow: "auto",
        }}
      >
        <img
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
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
          <div ref={divRef} className="mt-5 position-relative parent">
            <img
              src={deviceImage}
              alt="Device"
              className="img-thumbnail bg-transparent w-100"
            />
            <DndProvider backend={HTML5Backend}>
              {toolsImages.map((image, index) => (
                <DraggableImage key={index} src={image} />
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
      <Buttons
        handleTabChange={handleTabChange}
        next="chemicals"
        previous="general"
      />
    </div>
  );
};

export default ExperimentImages;
