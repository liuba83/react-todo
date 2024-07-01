function AddTodoForm() {
  function handleAddTodo(event) {
    event.preventDefault();

    let todoTitle = event.target.elements.title.value;
    console.log(todoTitle);
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title </label>
        <input name="title" type="text" id="todoTitle" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
