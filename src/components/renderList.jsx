import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import InputUser from "./inputUser";

import { useSelector } from "react-redux";

const RenderList = ({
  handleDelete,
  handleCheckboxChange,
  selectedColorChange,
  editTask,
}) => {
  const todos = useSelector((state) => state.todos);
  const taskCompleted = useSelector((state) => state.filter);

  // console.log("Todos @", todos);
  const handleChangeEdit = (receivedItem, e) => {
    console.log("received Item @@", receivedItem);
    console.log("received event @@", e);

    // const editItem = { ...receivedItem };
  };

  const handleClickEdit = (receivedItem) => {};

  return (
    <div>
      {todos.map((item) => {
        if (taskCompleted.filterState === "completed" && item.completed) return;

        if (taskCompleted.filterState === "active" && !item.completed) return;

        if (
          !taskCompleted.filterColor.includes(item.color) &&
          taskCompleted.filterColor.length !== 0
        )
          return;

        if (item.editIndicator) {
          return (
            <InputUser
              input={item}
              handleChange={(e) => handleChangeEdit(item, e)}
              handleClick={() => handleClickEdit(item)}
            />
          );
        }

        {
          return (
            <div className="render-list-container" key={item.id}>
              <label className="input-container">
                <input
                  className="input-checkbox"
                  id={item.id}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={item.completed}
                />
                <span className="checkMark"></span>
              </label>
              <div className="item-task">{item.value}</div>
              <div>
                <div className="selectWrapper">
                  <select
                    value={item.color}
                    onChange={(event) => selectedColorChange(event, item)}
                    className="selectClass"
                    style={{ color: item.color }}
                  >
                    <option value="selectColor">Select color:</option>
                    <option
                      value="green"
                      style={{
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      Green
                    </option>
                    <option
                      value="red"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      Red
                    </option>
                    <option
                      value="blue"
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      Blue
                    </option>
                    <option
                      value="orange"
                      style={{ color: "orange", fontWeight: "bold" }}
                    >
                      Orange
                    </option>
                    <option
                      value="purple"
                      style={{ color: "purple", fontWeight: "bold" }}
                    >
                      Purple
                    </option>
                  </select>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => editTask(item)}
              />
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default RenderList;
