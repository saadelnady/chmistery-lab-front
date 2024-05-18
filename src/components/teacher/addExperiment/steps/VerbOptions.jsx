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
    switch (step.verb) {
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
            currentStep={steps[index]}
          />
        );
      case "collaporate":
        return (
          <CollaborateVerb
            rowIndex={index}
            chemicals={chemicals}
            tools={tools}
            steps={steps}
            setSteps={setSteps}
            currentStep={steps[index]}
          />
        );
      case "put":
        return (
          <PutVerb
            rowIndex={index}
            chemicals={chemicals}
            tools={tools}
            steps={steps}
            setSteps={setSteps}
            currentStep={steps[index]}
          />
        );
      case "weight":
        return (
          <WeightVerb
            rowIndex={index}
            data={tools}
            steps={steps}
            setSteps={setSteps}
            currentStep={steps[index]}
          />
        );

      case "heat":
        return (
          <HeatVerb
            rowIndex={index}
            data={tools}
            steps={steps}
            setSteps={setSteps}
            currentStep={steps[index]}
          />
        );

      case "remove":
        return (
          <RemoveVerb
            rowIndex={index}
            data={tools}
            steps={steps}
            setSteps={setSteps}
            currentStep={steps[index]}
          />
        );
      default:
        return null;
    }
  };

  return renderOptions();
};

export default VerbOptions;
