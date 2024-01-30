import FilterByColor from "./components/filterByColor";
import RadioInputGroup from "./components/radioInputGroup";

const Footer = ({
  boxSelected,
  handleMarkAllCompleted,
  handleClearCompleted,
  setFilterByStatus,
  dataArray,
  checkedIds,
}) => {
  return (
    <div className="footer">
      <div className="box">
        <span>Actions</span>
        <button className="actionsButton" onClick={handleMarkAllCompleted}>
          Mark All Completed
        </button>
        <button className="actionsButton" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>
      <div className="box2">
        <span>Remaining Todos</span>
        {/* calculation of remaining todo  */}
        {dataArray.length - checkedIds.length}
      </div>
      <div className="box3">
        <span>Filter by Status</span>

        {[
          { labelName: "All", value: "all" },
          { labelName: "Active", value: "active" },
          { labelName: "Completed", value: "completed" },
        ].map((item) => {
          return (
            <RadioInputGroup
              labelName={item.labelName}
              inputValue={item.value}
              setFilterByStatus={setFilterByStatus}
            />
          );
        })}
      </div>
      <div className="box4">
        <span>Filter by Color</span>
        <FilterByColor boxSelected={boxSelected} />
      </div>
    </div>
  );
};

export default Footer;
