import { useRef, useEffect } from "react";
import propTypes from "prop-types";

function InputWithLabel({ todoTitle, handleTitleChange }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <input
      name="title"
      type="text"
      id="todoTitle"
      value={todoTitle}
      onChange={handleTitleChange}
      ref={inputRef}
    />
  );
}

InputWithLabel.propTypes = {
  todoTitle: propTypes.string.isRequired,
  handleTitleChange: propTypes.func.isRequired,
};

export default InputWithLabel;
