import { useState } from "react";
import DropDown from "../../shared/DropDown";

const CollaborateVerb = ({ chemicals, tools }) => {
  const [selectedValueOne, setSelectedValueOne] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");
  const [selectedValueThree, setSelectedValueThree] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleChangeOne = (e) => {
    setSelectedValueOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setSelectedValueTwo(e.target.value);
  };
  const handleChangeThree = (e) => {
    setSelectedValueThree(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  
  return (
    <div className="d-flex flex-wrap">
      <input
        type="text"
        className="mb-2"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <span className="mx-2">of</span>
      <DropDown
        data={chemicals}
        selectedValue={selectedValueOne}
        handleChange={handleChangeOne}
      />
      <span className="mx-2">by</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueTwo}
        handleChange={handleChangeTwo}
      />
      <span className="mx-2">in</span>
      <DropDown
        data={tools}
        selectedValue={selectedValueThree}
        handleChange={handleChangeThree}
      />
    </div>
  );
};

export default CollaborateVerb;
