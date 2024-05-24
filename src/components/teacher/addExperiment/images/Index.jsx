import ToolsComponent from "./ToolsComponent";
import DeviceComponent from "./DeviceComponent";
import { useDispatch, useSelector } from "react-redux";
import { editExperiment } from "../../../../store/actions/experiment/experimentActions";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Index = () => {
  // const [images, setImages] = useState({
  //   device: {
  //     image: "URL",
  //     imageId: "IMAGE_ID",
  //     dimensions: {
  //       width: "",
  //       height: "",
  //     },
  //   },
  //   tools: [
  //     {
  //       order: 1,
  //       image: "URL",
  //       position: {
  //         x: "100px",
  //         y: "100px",
  //       },
  //       dimensions: {
  //         width: "100px",
  //         height: "100px",
  //       },
  //     },
  //     {
  //       order: 2,
  //       image: "URL",
  //       position: {
  //         x: "100px",
  //         y: "100px",
  //       },
  //       dimensions: {
  //         width: "100px",
  //         height: "100px",
  //       },
  //     },
  //     {
  //       order: 3,
  //       image: "URL",
  //       position: {
  //         x: "100px",
  //         y: "100px",
  //       },
  //       dimensions: {
  //         width: "100px",
  //         height: "100px",
  //       },
  //     },
  //     {
  //       order: 4,
  //       image: "URL",
  //       position: {
  //         x: "100px",
  //         y: "100px",
  //       },
  //       dimensions: {
  //         width: "100px",
  //         height: "100px",
  //       },
  //     },
  //   ],
  // });
  const { experiment } = useSelector((state) => state.experimentReducer);
  console.log("experiment===>", experiment);
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
