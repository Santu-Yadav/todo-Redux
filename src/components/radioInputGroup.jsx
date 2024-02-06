import { useDispatch } from "react-redux";
import { filterByState } from "../ReduxStore/slices/secondSlice";

const RadioInputGroup = ({ labelName, inputValue }) => {
  const dispatch = useDispatch();

  const onValueChangeRadio = (e) => {
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
