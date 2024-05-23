const Step = ({ step, index }) => {
  const Shared = () => {
    return (
      <p>
        {step?.description?.tool1?.title} <span className="mx-3">in</span>
        {step?.description?.tool2?.title}
      </p>
    );
  };
  const Collaporate = () => {
    return (
      <p>
        {step?.description?.quantity.value}
        <span className="mx-3">of</span>
        {step?.description.chemical.title}
        <span className="mx-3">by</span>
        {step.description.tool1.title} <span className="mx-3">in</span>
        {step.description.tool2.title}
      </p>
    );
  };
  const Heat = () => {
    return (
      <p>
        {step?.description?.tool1?.title} <span className="mx-3">by</span>
        {step?.description?.tool2?.title} <span className="mx-3">to</span>
        {step?.description?.temperature?.value}
      </p>
    );
  };
  const Weight = () => {
    return (
      <p>
        {step?.description?.quantity.value} <span className="mx-3">by</span>
        {step?.description?.tool1?.title} <span className="mx-3">in</span>
        {step?.description?.tool2?.title}
      </p>
    );
  };
  const Put = () => {
    return (
      <p>
        {step?.description?.chemical?.title} <span className="mx-3">in</span>
        {step?.description?.tool1?.title}
      </p>
    );
  };
  const Remove = () => {
    return <p>{step?.description?.tool1?.title}</p>;
  };

  let content;
  switch (step.verb) {
    case "fix":
    case "insert":
    case "pour":
    case "near":
      content = <Shared />;
      break;
    case "collaporate":
      content = <Collaporate />;
      break;
    case "heat":
      content = <Heat />;
      break;
    case "weight":
      content = <Weight />;
      break;
    case "put":
      content = <Put />;
      break;
    case "remove":
      content = <Remove />;
      break;

    default:
      content = null;
  }

  return (
    <li className="mb-3 d-flex align-items-center">
      <span>{index + 1}.</span>
      <button className="btn border">{step.verb}</button>
      {content}
    </li>
  );
};

export default Step;
