import React, { useState } from "react";
import DropDown from "../../shared/DropDown";

const RemoveVerb = ({ tools }) => {
  const [selectedValueOne, setSelectedValueOne] = useState("");
  const handleChangeOne = (e) => {
    setSelectedValueOne(e.target.value);
  };
  return (
    <div className="d-flex  flex-wrap">
      <DropDown
        data={tools}
        selectedValue={selectedValueOne}
        handleChange={handleChangeOne}
      />
    </div>
  );
};

export default RemoveVerb;
