const InputUser = ({ input, handleChange, handleClick }) => {
  return (
    <div>
      {/* {console.log("Input @@", input)} */}
      <input
        className="upper-body-input"
        value={input.value || " "}
        onChange={handleChange}
      />
      <button className="addButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default InputUser;
