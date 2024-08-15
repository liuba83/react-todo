import React, { useRef, useEffect } from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <label htmlFor="todoTitle">{children} </label>
      <input
        name="title"
        type="text"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
}

export default InputWithLabel;
