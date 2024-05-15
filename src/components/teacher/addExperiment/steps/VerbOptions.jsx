import { useSelector } from "react-redux";
import SharedVerbs from "./SharedVerbs.jsx";
import PutVerb from "./PutVerb.jsx";
import WeightVerb from "./WeightVerb.jsx";
import HeatVerb from "./HeatVerb.jsx";
import CollaborateVerb from "./CollaborateVerb.jsx";
import RemoveVerb from "./RemoveVerb.jsx";

const VerbOptions = ({ step }) => {
  const { tools } = useSelector((state) => state.toolReducer);
  const { chemicals } = useSelector((state) => state.chemicalReducer);
  const renderOptions = () => {
    switch (step.title) {
      case "fix":
      case "insert":
      case "pour":
      case "near":
        return <SharedVerbs data={tools} />;
      case "put":
        return <PutVerb chemicals={chemicals} tools={tools} />;
      case "weight":
        return <WeightVerb tools={tools} />;
      case "heat":
        return <HeatVerb tools={tools} />;
      case "collaporate":
        return <CollaborateVerb tools={tools} chemicals={chemicals} />;
      case "remove":
        return <RemoveVerb tools={tools} />;
      default:
        return null; // or a default message/error component
    }
  };

  return renderOptions();
};

export default VerbOptions;
