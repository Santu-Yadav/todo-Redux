/* 
Date: 5th-Feb-2024

Blocker: After clearing filterByStatus useState, dasboard stops displaying values. Have a look
next time. -- 
**************************************************************************
Date: 6th-Feb-2024 : above problem is fixed.
Problem: working on filterByColor in reduxStore/secondSlice.
**************************************************************************
*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  add,
  remove,
  colorChange,
  taskCompletedBoxChecked,
  markAllCompleted,
  clearCompleted,
} from "./ReduxStore/slices/firstSlice";

import MainBody from "./mainBody";
import Footer from "./footer";

import "./app.css";

function App() {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();

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
    dispatch(clearCompleted());
  };

  const handleCheckboxChange = (event) => {
    const selectedId = event.target.id;
    const isChecked = event.target.checked;
    dispatch(taskCompletedBoxChecked({ selectedId, isChecked }));
  };

  const editTask = (item) => {
    console.log("editTask icon onClick #", item);
  };

  return (
    <div className="appContainer">
      <header className="header">useState Fundamentals Example</header>
      <div className="body">
        <p className="body-p">Todos</p>
        <div className="body-dashboard">
          <MainBody
            handleDelete={handleDelete}
            handleCheckboxChange={handleCheckboxChange}
            selectedColorChange={selectedColorChange}
            handleClick={handleClick}
            handleChange={handleChange}
            input={input}
            editTask={editTask}
          />

          <Footer
            handleMarkAllCompleted={handleMarkAllCompleted}
            handleClearCompleted={handleClearCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
