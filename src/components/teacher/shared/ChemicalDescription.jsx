import { imageUrl } from "../../../api/api";

const ChemicalDescription = ({ handleDescription, chemical }) => {
  console.log("chemical== >", chemical);
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
            src={`${imageUrl}/${chemical?.atomicStructure}`}
            alt=""
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />
          <p>name : {chemical.name}</p>
          <p>state : {chemical.state}</p>
          <p>color : {chemical.color}</p>
          <p>taste : {chemical.taste}</p>
          <p>molecular formula : {chemical.molecularFormula}</p>
        </div>
      </div>
    </div>
  );
};

export default ChemicalDescription;
