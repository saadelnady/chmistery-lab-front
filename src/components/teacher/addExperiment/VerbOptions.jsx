import Options from "./Options.jsx";
const VerbOptions = ({ step }) => {
  const renderOptions = () => {
    switch (step.verb) {
      case "fix":
        return <Options />;
      case "insert":
        return <Options />;
      case "pour":
        return <Options />;
      case "near":
        return <Options />;
      case "steps":
        return <Options />;
      default:
        return;
    }
  };
  return <div>{renderOptions()}</div>;
};

export default VerbOptions;
