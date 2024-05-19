import { useSelector } from "react-redux";

const ExperimentResult = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  return (
    <div className="mb-4">
      <ul className="shadow col-12 py-3">
        <p className="fw-bold text-center">Observations:</p>
        <p className="text-center">{experiment?.info?.observation}</p>
        <p className="fw-bold text-center">Conclusion :</p>
        <p className="text-center">{experiment?.info?.conclusion}</p>
        <p className="fw-bold text-center">Equation :</p>
        <p className="text-center">{experiment?.info?.equation}</p>
        <p className="fw-bold text-center">Objective :</p>
        <p className="text-center">{experiment?.info?.objective}</p>
      </ul>
    </div>
  );
};

export default ExperimentResult;
