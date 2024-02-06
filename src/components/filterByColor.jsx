import { useDispatch } from "react-redux";
import { filterByColor } from "../ReduxStore/slices/secondSlice";

import "./filterByColor.css";

const filterByColorData = [
  {
    value: "green",
    labelName: "Green",
  },
  {
    value: "red",
    labelName: "Red",
  },
  {
    value: "blue",
    labelName: "Blue",
  },
  {
    value: "orange",
    labelName: "Orange",
  },
  {
    value: "purple",
    labelName: "Purple",
  },
];

const FilterByColor = () => {
  const dispatch = useDispatch();

  const boxSelected = (e) => {
    const value = e.target.value;
    const checkedIndicator = e.target.checked;

    console.log("filter By Color @@", e);
    dispatch(filterByColor({ value, checkedIndicator }));
  };
  return (
    <div className="container-filter">
      {filterByColorData.map((item) => (
        <label>
          <input
            type="checkbox"
            style={{ marginRight: "10px" }}
            onChange={boxSelected}
            value={item.value}
          />
          <span style={{ color: item.value }}>{item.labelName}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterByColor;
