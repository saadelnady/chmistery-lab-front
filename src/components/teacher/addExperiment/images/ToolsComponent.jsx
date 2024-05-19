const ToolsComponent = ({ toolsImages, handleRemoveToolImage }) => {
  return (
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
  );
};

export default ToolsComponent;
