import "./App.css";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import React from "react";

function App() {
  const [todoList, setTodoList] = React.useState([]);

  function addTodo (newTodo) {
    setTodoList([...todoList], newTodo)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>
        Searching for <strong>{todoList}</strong>
      </p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
