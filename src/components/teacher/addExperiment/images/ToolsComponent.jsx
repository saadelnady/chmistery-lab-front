const ToolsComponent = ({
  toolsImagesPreview,
  handleRemoveToolImage,
  handleToolImageUpload,
  toolsInputRef,
}) => {
  return (
    <div className="col-12 col-sm-5">
      <h3>Tools :</h3>
      {toolsImagesPreview.length < 10 && (
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
          />
        </>
      )}
      <div className="d-flex flex-wrap align-items-center">
        {toolsImagesPreview.map((image, index) => (
          <div key={index} className="my-4 position-relative fit-content">
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
  );
};

export default ToolsComponent;
