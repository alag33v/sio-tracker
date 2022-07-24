const CustomInput = ({ max, changeValue, label }) => {
  return (
    <label>
      <input type='number' max={max} min='0' onChange={changeValue} required />
      <span>{label}</span>
    </label>
  );
};

export default CustomInput;
