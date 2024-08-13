function InputWithLabel({todoTitle, handleTitleChange, label}) {
  return (
    <>
      <label htmlFor="todoTitle">{label} </label>
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
