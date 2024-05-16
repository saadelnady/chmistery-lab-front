import { useSelector } from "react-redux";
import SharedVerbs from "./SharedVerbs.jsx";
import PutVerb from "./PutVerb.jsx";
import WeightVerb from "./WeightVerb.jsx";
import HeatVerb from "./HeatVerb.jsx";
import CollaborateVerb from "./CollaborateVerb.jsx";
import RemoveVerb from "./RemoveVerb.jsx";

const VerbOptions = ({ index, step, steps, setSteps }) => {
  const { tools } = useSelector((state) => state.toolReducer);
  const { chemicals } = useSelector((state) => state.chemicalReducer);
  const renderOptions = () => {
    switch (step.title) {
      case "fix":
      case "insert":
      case "pour":
      case "near":
        return (
          <SharedVerbs
            rowIndex={index}
            data={tools}
            steps={steps}
            setSteps={setSteps}
          />
        );
      case "put":
        return <PutVerb index={index} chemicals={chemicals} tools={tools} />;
      case "weight":
        return <WeightVerb index={index} tools={tools} />;
      case "heat":
        return <HeatVerb index={index} tools={tools} />;
      case "collaporate":
        return (
          <CollaborateVerb index={index} tools={tools} chemicals={chemicals} />
        );
      case "remove":
        return <RemoveVerb index={index} tools={tools} />;
      default:
        return null;
    }
  };

  return renderOptions();
};

export default VerbOptions;
