/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useRef } from "react";
import { debounce } from "lodash";
import DropDown from "../../shared/DropDown";

const HeatVerb = ({ rowIndex, data, steps, setSteps, currentStep }) => {
  const [selectedValues, setSelectedValues] = useState({
    temperature: currentStep.description.temperature.value || "",
    tool1: {
      id: currentStep.description.tool1.id || null,
      title: currentStep.description.tool1.title || null,
    },
    tool2: {
      id: currentStep.description.tool2.id || null,
      title: currentStep.description.tool2.title || null,
    },
  });
  const inputRef = useRef(null);
  const debouncedUpdateSteps = useCallback(
    debounce((updatedSteps) => {
      setSteps(updatedSteps);
    }, 1000),
    [setSteps]
  );
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [JSON.stringify(steps)]);

  const handleChange = (field) => (e) => {
    const selectedId = e.target.value;
    const selectedTitle =
      e.nativeEvent.target[e.nativeEvent.target.selectedIndex]?.text || "";

    setSelectedValues((prevValues) => ({
      ...prevValues,
      [field]:
        field === "temperature"
          ? selectedId
          : { id: selectedId, title: selectedTitle },
    }));

    if (Array.isArray(steps)) {
      const updatedSteps = [...steps];
      if (field === "temperature") {
        updatedSteps[rowIndex].description[field].value = selectedId;
        debouncedUpdateSteps(updatedSteps);
      } else {
        updatedSteps[rowIndex].description[field].id = selectedId;
        updatedSteps[rowIndex].description[field].title = selectedTitle;
        setSteps(updatedSteps); // Immediate update for dropdown changes
      }
    } else {
      console.error("steps is not an array");
    }
  };

  return (
    <div className="d-flex flex-wrap">
      <DropDown
        data={data}
        selectedValue={selectedValues.tool1.id}
        handleChange={handleChange("tool1")}
      />
      <span className="mx-2">By</span>
      <DropDown
        data={data}
        selectedValue={selectedValues.tool2.id}
        handleChange={handleChange("tool2")}
      />
      <span className="mx-2">To</span>
      <input
        type="text"
        className="mb-2"
        value={selectedValues.temperature}
        onChange={handleChange("temperature")}
        ref={inputRef}
      />
    </div>
  );
};

export default HeatVerb;
