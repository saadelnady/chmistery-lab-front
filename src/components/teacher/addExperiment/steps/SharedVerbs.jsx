import { useState } from "react";
import DropDown from "../../shared/DropDown";

const SharedVerbs = ({ data }) => {
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
      <DropDown
        data={data}
        selectedValue={selectedValueOne}
        handleChange={handleChangeOne}
      />
      <span className="mx-3">in</span>
      <DropDown
        data={data}
        selectedValue={selectedValueTwo}
        handleChange={handleChangeTwo}
      />
    </div>
  );
};

export default SharedVerbs;
