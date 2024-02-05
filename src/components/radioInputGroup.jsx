import {useDispatch} from "react-redux";

const RadioInputGroup = ({ labelName, inputValue, setFilterByStatus }) => {
  const onValueChangeRadio = (e) => {
    console.log("footer - radio button", e);
    setFilterByStatus(e.target.value);
    //************************************************

    //************************************************
  };
  return (
    <>
      <label className="statusButton">
        <input
          type="radio"
          name="myRadio"
          className="radio-filterByStatus"
          onChange={onValueChangeRadio}
          value={inputValue}
        />
        {labelName}
      </label>
    </>
  );
};

export default RadioInputGroup;
