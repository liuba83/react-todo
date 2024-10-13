import style from './TodoListItem.module.css'
import propTypes from 'prop-types';

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={style.listItem} >
      {todo.title}
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: propTypes.object.isRequired,
  onRemoveTodo: propTypes.func.isRequired,
};

export default TodoListItem;
