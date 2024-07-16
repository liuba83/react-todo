import React from "react";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  
  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    event.target.reset();
    props.onAddTodo(todoTitle);
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title </label>
        <input name="title" type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
