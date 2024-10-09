import TodoListItem from "./TodoListItem";
import propTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: propTypes.array.isRequired,
  onRemoveTodo: propTypes.func.isRequired,
};

export default TodoList;
