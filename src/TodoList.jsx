import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "Set up project",
  },
  {
    id: 2,
    title: "Complete assignment",
  },
  {
    id: 3,
    title: "Submit assignment",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
