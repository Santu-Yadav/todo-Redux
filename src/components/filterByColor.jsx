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

const FilterByColor = ({ boxSelected }) => {
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
