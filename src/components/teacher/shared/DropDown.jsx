const DropDown = ({ data, selectedValue, handleChange }) => {
  return (
    <div>
      <select
        name="dropdown"
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        className="mb-2"
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
