import { useState } from "react";
import DropDown from "../../shared/DropDown";

const SharedVerbs = ({ rowIndex, data, steps, setSteps }) => {
  const [selectedValues, setSelectedValues] = useState({
    tool1: "",
    tool2: "",
  });

  const handleChange = (tool) => (e) => {
    const selectedId = e.target.value;
    const selectedTitle =
      e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text;

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [tool]: selectedId,
    }));

    const updatedSteps = [...steps];

    console.log("updatedSteps---------------->?", updatedSteps);
    console.log("tool---------------->?", tool);
    console.log("tool---------------->?", tool);
    console.log(
      "updatedSteps[rowIndex].description[tool] ---------------->?",
      updatedSteps[rowIndex].description[tool]
    );
    console.log(
      "updatedSteps[rowIndex].description[tool].id---------------->?",
      updatedSteps[rowIndex].description[tool].id
    );
    // updatedSteps[rowIndex].description[tool].title = selectedTitle;
    // updatedSteps[rowIndex].description[tool].id = selectedId;
    // setSteps(updatedSteps);
  };

  return (
    <div className="d-flex flex-wrap">
      <DropDown
        data={data}
        selectedValue={selectedValues.tool1}
        handleChange={handleChange("tool1")}
      />

      <span className="mx-2">in</span>

      <DropDown
        data={data}
        selectedValue={selectedValues.tool2}
        handleChange={handleChange("tool2")}
      />
    </div>
  );
};

export default SharedVerbs;
