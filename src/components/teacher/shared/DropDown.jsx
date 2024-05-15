import React from "react";

const DropDown = ({ data, selectedValue, handleChange }) => {
  if (!Array.isArray(data)) {
    console.error("DropDown data is not an array.");
    return null; // or a default message/error component
  }

  return (
    <div>
      <select
        name="dropdown"
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {data.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
