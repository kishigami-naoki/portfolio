import { useState, useRef, useEffect } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  if (!isEditing) {
    return (
      <li className={todo.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span
          onDoubleClick={() => {
            if (!todo.completed) {
              setIsEditing(true);
              setEditText(todo.text);
            }
          }}
          title="ダブルクリックで編集"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#9ca3af" : "black",
            cursor: todo.completed ? "not-allowed" : "pointer",
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>削除</button>
      </li>
    );
  }
  return (
    <li className={`fade-in ${todo.completed ? "completed" : ""}`}>
      <input
        ref={inputRef}
        value={editText}
        disabled={todo.completed}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (editText.trim() === "") return;
            editTodo(todo.id, editText);
            setIsEditing(false);
          }

          if (e.key === "Escape") {
            setEditText(todo.text);
            setIsEditing(false);
          }
        }}
      />
      <button
        onClick={() => {
          if (editText.trim() === "") return;
          editTodo(todo.id, editText);
          setIsEditing(false);
        }}
      >
        保存
      </button>
    </li>
  );
}

export default TodoItem;
