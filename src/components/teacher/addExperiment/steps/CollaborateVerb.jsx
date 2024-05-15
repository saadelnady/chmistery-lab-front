import { useState } from "react";
import DropDown from "../../shared/DropDown";

const CollaborateVerb = ({ chemicals, tools }) => {
  const [selectedValueOne, setSelectedValueOne] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");

  const handleChangeOne = (e) => {
    setSelectedValueOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setSelectedValueTwo(e.target.value);
  };
  return (
    <div className="d-flex flex-wrap">
      <input type="text" />
      <span className="mx-3">of</span>
      <DropDown
        data={chemicals}
        selectedValue={selectedValueOne}
        handleChange={handleChangeOne}
      />
      <span className="mx-3">by</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueTwo}
        handleChange={handleChangeTwo}
      />
      <span className="mx-3">in</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueTwo}
        handleChange={handleChangeTwo}
      />
    </div>
  );
};

export default CollaborateVerb;
