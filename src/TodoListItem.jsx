import style from './TodoListItem.module.css'

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={style.listItem} >
      {todo.title}
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoListItem;
