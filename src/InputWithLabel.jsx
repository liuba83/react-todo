function InputWithLabel({todoTitle, handleTitleChange, children}) {
  return (
    <>
      <label htmlFor="todoTitle">{children} </label>
      <input
        name="title"
        type="text"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
}

export default InputWithLabel;
