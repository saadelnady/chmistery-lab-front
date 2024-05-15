import { useState } from "react";
import DropDown from "../../shared/DropDown";

const WeightOption = ({ tools }) => {
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
      <input type="text" className="mb-2" />
      <span className="mx-2">by</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueOne}
        handleChange={handleChangeOne}
      />
      <span className="mx-2">in</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueTwo}
        handleChange={handleChangeTwo}
      />
    </div>
  );
};

export default WeightOption;
