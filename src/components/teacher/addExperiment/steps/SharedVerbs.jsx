import { useState } from "react";
import DropDown from "../../shared/DropDown";

const SharedVerbs = ({ rowIndex, data, steps, setSteps, currentStep }) => {
  const [selectedValues, setSelectedValues] = useState({
    tool1: {
      id: currentStep.description.tool1.id || null,
      title: currentStep.description.tool1.title || null,
    },
    tool2: {
      id: currentStep.description.tool2.id || null,
      title: currentStep.description.tool2.title || null,
    },
  });

  const handleChange = (tool) => (e) => {
    const selectedId = e.target.value;
    const selectedTitle =
      e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text;

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [tool]: {
        id: selectedId,
        title: selectedTitle,
      },
    }));

    const updatedSteps = [...steps];

    updatedSteps[rowIndex].description[tool].title = selectedTitle;
    updatedSteps[rowIndex].description[tool].id = selectedId;
    setSteps(updatedSteps);
  };

  return (
    <div className="d-flex flex-wrap ">
      <DropDown
        data={data}
        selectedValue={selectedValues?.tool1?.id}
        handleChange={handleChange("tool1")}
      />

      <span className="mx-2">in</span>

      <DropDown
        data={data}
        selectedValue={selectedValues?.tool2?.id}
        handleChange={handleChange("tool2")}
      />
    </div>
  );
};

export default SharedVerbs;
