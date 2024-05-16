import { imageUrl } from "../../../api/api";

const ToolDescription = ({ handleDescription, tool }) => {
  return (
    <div className="overLay d-flex justify-content-center align-items-center">
      <div className="col-5 bg-light rounded p-2">
        <div className="d-flex justify-content-end">
          <i
            className="bi bi-x-lg cursor-pointer fs-3"
            onClick={() => {
              handleDescription();
            }}
          ></i>
        </div>
        <div className="text-center">
          <img
            src={`${imageUrl}/${tool?.image}`}
            alt=""
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />
          <p>name : {tool.name}</p>
          <p>description : {tool.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolDescription;
