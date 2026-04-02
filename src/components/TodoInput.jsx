import { useState } from "react";

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="タスクを入力"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoInput;
