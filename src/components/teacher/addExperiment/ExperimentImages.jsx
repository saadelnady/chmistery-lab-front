import { useRef, useState } from "react";

const ExperimentImages = () => {
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
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("index"), 10);

    const updatedImages = [...toolsImages];
    const draggedImage = updatedImages[sourceIndex];

    updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(targetIndex, 0, draggedImage);

    setToolsImages(updatedImages);
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
              <i class="bi bi-cloud-arrow-up text-danger me-3 fs-1"></i>
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
          <div className="mt-5 position-relative">
            <img
              src={deviceImage}
              alt="Device"
              className="img-thumbnail bg-transparent "
            />

            {toolsImages.map((image, index) => (
              <div
                key={index}
                className="tool-position d-flex justify-content-center
             align-items-center position-absolute top-0 start-0 bg-danger
             text-light text-center fs-3 rounded"
                draggable={true}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
              >
                {index + 1}
              </div>
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
        ) : (
          <label
            htmlFor="device"
            className="btn active border text-center fw-bold d-flex align-items-center fs-3 mt-4"
          >
            <i class="bi bi-cloud-arrow-up text-danger me-3 fs-1"></i>
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
    </div>
  );
};

export default ExperimentImages;
