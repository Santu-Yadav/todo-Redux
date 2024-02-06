import InputUser from "./components/inputUser";
import RenderList from "./components/renderList";

const MainBody = ({
  handleDelete,
  handleCheckboxChange,
  selectedColorChange,
  handleClick,
  handleChange,
  input,

  editTask,
}) => {
  return (
    <div className="upper-body">
      <InputUser
        input={input}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <RenderList
        input={input}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        selectedColorChange={selectedColorChange}
        handleChange={handleChange}
        handleClick={handleClick}
        editTask={editTask}
      />
    </div>
  );
};

export default MainBody;
