import { useSelector } from "react-redux";

const ExperimentDetails = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
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

      <ul className="shadow col-12  col-sm-4 col-md-3 p-3">
        <p className="fw-bold text-center">Steps</p>
        <li className="mb-3">
          <span>1.</span> measure 30g of Silver Nitrate solution in test tube
        </li>
        <li className="mb-3">
          <span>2.</span> pour the test tube into the retort measure 30g of
          Soduim cloride
        </li>
        <li className="mb-3">
          <span>3.</span> solution in test tube pour the test tube into the
          retort Observe the
        </li>
        <li className="mb-3">
          <span>4.</span> pour the test tube into the retort measure 30g of
          Soduim cloride reaction
        </li>
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
