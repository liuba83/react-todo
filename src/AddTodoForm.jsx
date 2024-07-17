import React from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    if(todoTitle==="") {
      alert("You have to write a todo")
      return
    }
    console.log(todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
      <input
        name="title"
        type="text"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
