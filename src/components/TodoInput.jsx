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
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "8px",
        width: "100%",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="タスクを入力"
        style={{
          flex: 1,
          minWidth: 0,
          fontSize: "16px",
          padding: "10px",
        }}
      />

      <button
        type="submit"
        style={{
          flexShrink: 0,
          padding: "10px 16px",
        }}
      >
        追加
      </button>
    </form>
  );
}

export default TodoInput;
