import ToolsComponent from "./ToolsComponent";
import DeviceComponent from "./DeviceComponent";
import { useDispatch, useSelector } from "react-redux";
import { editExperiment } from "../../../../store/actions/experiment/experimentActions";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Index = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const dispatch = useDispatch();
  const { experimentId } = useParams();
  const handleEditExperimentImages = () => {
    dispatch(
      editExperiment(experimentId, { images: experiment.images }, toast)
    );
  };
  return (
    <div className="shadow mt-4 py-5 px-3 rounded">
      <div className="row justify-content-between">
        <ToolsComponent />
        <DeviceComponent />
      </div>
      <button className="btn active mt-4" onClick={handleEditExperimentImages}>
        Edit
      </button>
    </div>
  );
};

export default Index;
