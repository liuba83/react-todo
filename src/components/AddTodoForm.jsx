import React from "react";
import InputWithLabel from "./InputWithLabel";
import propTypes from 'prop-types';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    if (todoTitle === "") {
        alert("You have to write a todo");
        return;
    }
    onAddTodo({
        title: todoTitle,
    });
    setTodoTitle("");
}

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: propTypes.func.isRequired,
};

export default AddTodoForm;
