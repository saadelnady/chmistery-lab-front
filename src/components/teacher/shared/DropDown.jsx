const DropDown = ({ data, selectedValue, handleChange }) => {
  return (
    <select
      id="dropdown"
      value={selectedValue}
      onChange={handleChange}
      className="mb-2"
    >
      <option value="Select verb">Select an option</option>
      {data.map((option, index) => (
        <option
          key={index}
          value={option._id}
          selected={selectedValue === option._id}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
