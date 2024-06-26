import { useEffect, useState } from "react";
import Loading from "../../shared/Loading";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiment } from "../../../store/actions/experiment/experimentActions";
import ExperimentDetails from "./ExperimentDetails";
import ExperimentResult from "./ExperimentResult";
import ExperimentAnimation from "./ExperimentAnimation";

const Index = () => {
  const { isLoading, experiment } = useSelector(
    (state) => state.experimentReducer
  );
  const [counter, setCounter] = useState(0);

  const { experimentId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperiment(experimentId));
  }, [dispatch, experimentId]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="container">
      <h2 className="text-center mt-4">
        {experiment?.info?.name || "untitled"}
      </h2>
      <ExperimentDetails />
      <ExperimentAnimation counter={counter} setCounter={setCounter} />
      {counter === experiment?.images?.tools?.length && <ExperimentResult />}
    </div>
  );
};

export default Index;
