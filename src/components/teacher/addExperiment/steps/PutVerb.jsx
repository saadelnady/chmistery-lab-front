import React, { useState } from "react";
import DropDown from "../../shared/DropDown";

const PutVerb = ({
  rowIndex,
  chemicals,
  tools,
  steps,
  setSteps,
  currentStep,
}) => {
  const [selectedValues, setSelectedValues] = useState({
    chemical: {
      id: currentStep.description.chemical.id || null,
      title: currentStep.description.chemical.title || null,
    },
    tool1: {
      id: currentStep.description.tool1.id || null,
      title: currentStep.description.tool1.title || null,
    },
  });

  const handleChange = (key) => (e) => {
    const selectedId = e.target.value;
    const selectedTitle =
      e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text;

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: {
        id: selectedId,
        title: selectedTitle,
      },
    }));

    const updatedSteps = [...steps];

    updatedSteps[rowIndex].description[key].title = selectedTitle;
    updatedSteps[rowIndex].description[key].id = selectedId;
    setSteps(updatedSteps);
  };

  return (
    <div className="d-flex flex-wrap ">
      <DropDown
        data={chemicals}
        selectedValue={selectedValues?.chemical?.id}
        handleChange={handleChange("chemical")}
      />

      <span className="mx-2">in</span>

      <DropDown
        data={tools}
        selectedValue={selectedValues?.tool1?.id}
        handleChange={handleChange("tool1")}
      />
    </div>
  );
};

export default PutVerb;
