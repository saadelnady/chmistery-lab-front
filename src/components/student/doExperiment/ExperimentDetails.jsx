import { useSelector } from "react-redux";
import Step from "./Step";

const ExperimentDetails = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  console.log(experiment.steps);
  return (
    <div className="mt-5 row justify-content-between  ">
      <ul className="shadow col-12 col-sm-4 col-md-3 p-3">
        <p className="fw-bold text-center">Chemicals</p>
        {experiment?.chemicals && experiment.chemicals.length > 0 ? (
          experiment.chemicals.map((chemical, index) => (
            <li key={index}>{chemical.name}</li>
          ))
        ) : (
          <p className="mt-4">No chemicals to show</p>
        )}
      </ul>

      <ul className="shadow col-12 col-sm-4 p-3">
        <p className="fw-bold text-center">Steps</p>

        {experiment?.steps && experiment.steps.length > 0 ? (
          experiment.steps.map((step, index) => (
            <Step step={step} index={index} />
          ))
        ) : (
          <p className="mt-4">No chemicals to show</p>
        )}
      </ul>
      <ul className="shadow col-12  col-sm-4 col-md-3 p-3">
        <p className="fw-bold text-center">Tools</p>

        {experiment?.tools && experiment.tools.length > 0 ? (
          experiment.tools.map((tool, index) => (
            <li key={index}>{tool.name}</li>
          ))
        ) : (
          <p className="mt-4">No Tools to show</p>
        )}
      </ul>
    </div>
  );
};

export default ExperimentDetails;
