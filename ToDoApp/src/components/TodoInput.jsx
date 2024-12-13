import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value); //ensure state is updated with current input text.
        }}
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          if(!inputValue){return}
          handleAddTodo(inputValue);
          setInputValue('')
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
