import React, { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableImage from "./DraggableImage";
const ExperimentImages = ({ handleTabChange }) => {
  const [toolsImages, setToolsImages] = useState([]);
  const [deviceImage, setDeviceImage] = useState("");
  const [draggableImages, setDraggableImages] = useState([]);
  const parentDiv = useRef(null);
  const toolsInputRef = useRef(null);

  const handleToolImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setToolsImages((prevImages) => [...prevImages, ...urls]);
    const currentDraggableImages = [
      ...draggableImages,
      {
        position: {
          x: 0,
          y: 0,
        },
        dimensions: {
          width: 100,
          height: 100,
        },
      },
    ];
    setDraggableImages(currentDraggableImages);
    toolsInputRef.current.value = ""; // Clear the tools input field
  };
  useEffect(() => {
    console.log("draggableImages------->", draggableImages);
  }, [draggableImages]);

  const handleRemoveToolImage = (index) => {
    const updatedImages = [...toolsImages];
    updatedImages.splice(index, 1);
    setToolsImages(updatedImages);

    const upatedDragableImages = [...draggableImages];
    upatedDragableImages.splice(index, 1);
    setDraggableImages(upatedDragableImages);
  };

  const handleDeviceImageUpload = (e) => {
    const file = e.target.files[0];
    setDeviceImage(URL.createObjectURL(file));
  };

  const handleRemoveDeviceImage = () => {
    setDeviceImage("");
    parentDiv.current.value = "";
  };
  useEffect(() => {
    console.log("draggableImages-------------->", draggableImages);
  }, [draggableImages]);
  // ========================================================
  const [parentDimention, setParentDimensions] = useState({
    width: 0,
    height: 0,
  });
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const { clientWidth, clientHeight } = divRef.current;
        setParentDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceImage]);

  // ========================================================

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
            <div key={index} className="my-4 position-relative fit-content  ">
              <img
                src={image}
                alt={`Tool ${index + 1}`}
                className="cursor-pointer  "
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
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
          <div ref={parentDiv} className="mt-5 position-relative  ">
            <img
              src={deviceImage}
              alt="Device"
              className="img-thumbnail bg-transparent w-100"
            />
            <DndProvider backend={HTML5Backend}>
              {toolsImages.map((image, index) => (
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
          ref={parentDiv}
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
