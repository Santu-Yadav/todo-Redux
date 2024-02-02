import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  add,
  remove,
  colorChange,
  taskCompletedBoxChecked,
  markAllCompleted,
} from "./ReduxStore/slices/firstSlice";

import MainBody from "./mainBody";
import Footer from "./footer";

import "./app.css";

function App() {
  const [input, setInput] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const [filterByStatus, setFilterByStatus] = useState("all");
  const [selectedColorBoxArray, setSelectedColorBoxArray] = useState([]);

  //*************************************************** */
  const dispatch = useDispatch();
  //***************************************************

  const handleChange = (e) => {
    const uniqueIdentifier = `${Date.now()}_${Math.random()}`;
    setInput({
      id: uniqueIdentifier,
      value: e.target.value,
      color: "no color",
      editIndicator: false,
      completed: false,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(add(input));
    setInput({});
  };

  const handleDelete = (data) => {
    dispatch(remove(data));
  };

  const selectedColorChange = (event, item) => {
    const value = event.target.value;
    const id = item.id;
    dispatch(colorChange({ value, id }));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleClearCompleted = () => {
    const remaningData = dataArray.filter(
      (item) => !checkedIds.includes(item.id)
    );

    setDataArray(remaningData);
  };

  const handleCheckboxChange = (event) => {
    const selectedId = event.target.id;
    const isChecked = event.target.checked;

    dispatch(taskCompletedBoxChecked({ selectedId, isChecked }));
  };

  const boxSelected = (e) => {
    console.log("Green box selected", e);

    setSelectedColorBoxArray((prev) =>
      e.target.checked
        ? [...prev, e.target.value]
        : prev.filter((item) => item !== e.target.value)
    );
    console.log("selectedColorBoxArray", selectedColorBoxArray);
  };

  const editTask = (item) => {
    console.log("editTask icon onClick #", item);

    setDataArray(
      dataArray.map((element) =>
        element.id === item.id
          ? { ...element, editIndicator: true }
          : { ...element }
      )
    );
  };

  return (
    <div className="appContainer">
      <header className="header">useState Fundamentals Example</header>
      <div className="body">
        <p className="body-p">Todos</p>
        <div className="body-dashboard">
          <MainBody
            dataArray={dataArray}
            setDataArray={setDataArray}
            handleDelete={handleDelete}
            handleCheckboxChange={handleCheckboxChange}
            checkedIds={checkedIds}
            selectedColorChange={selectedColorChange}
            selectedColorBoxArray={selectedColorBoxArray}
            handleClick={handleClick}
            handleChange={handleChange}
            input={input}
            filterByStatus={filterByStatus}
            editTask={editTask}
          />

          <Footer
            boxSelected={boxSelected}
            handleMarkAllCompleted={handleMarkAllCompleted}
            handleClearCompleted={handleClearCompleted}
            setFilterByStatus={setFilterByStatus}
            dataArray={dataArray}
            checkedIds={checkedIds}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
