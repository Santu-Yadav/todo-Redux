import { useDispatch } from "react-redux";
import { filterByState } from "../ReduxStore/slices/secondSlice";

const RadioInputGroup = ({ labelName, inputValue, setFilterByStatus }) => {
  const dispatch = useDispatch();

  const onValueChangeRadio = (e) => {
    // console.log("footer - radio button", e);
    // setFilterByStatus(e.target.value);
    dispatch(filterByState(e.target.value));
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
