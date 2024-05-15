import { useState } from "react";
import DropDown from "../../shared/DropDown";

const HeatVerb = ({ tools }) => {
  const [selectedValueOne, setSelectedValueOne] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");

  const handleChangeOne = (e) => {
    setSelectedValueOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setSelectedValueTwo(e.target.value);
  };
  return (
    <div className="d-flex justify-content-between flex-wrap">
      <DropDown
        data={tools}
        selectedValue={selectedValueOne}
        handleChange={handleChangeOne}
      />
      <span>by</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueTwo}
        handleChange={handleChangeTwo}
      />
      <span>to</span>
      <input type="text" />
    </div>
  );
};

export default HeatVerb;
