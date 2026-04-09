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

  // 通常表示
  if (!isEditing) {
    return (
      <li className={todo.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <div
          className="todo-text"
          onClick={() => {
            if (!todo.completed) {
              setIsEditing(true);
              setEditText(todo.text);
            }
          }}
        >
          {todo.text}
        </div>

        <button onClick={() => deleteTodo(todo.id)}>削除</button>
      </li>
    );
  }

  // 編集モード
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
        style={{
          fontSize: "16px", // ← スマホでズーム防止
          padding: "6px",
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
