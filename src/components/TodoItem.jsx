import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TodoItem({ todo, deleteTodo, updateStatus, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: todo.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <motion.li
      layout
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className={todo.status === "done" ? "completed" : ""}
    >
      {!isEditing ? (
        <>
          <div className="todo-info">
            <span className={`status ${todo.status}`}>
              {todo.status === "todo" && "未対応"}
              {todo.status === "doing" && "対応中"}
              {todo.status === "done" && "完了"}
            </span>

            <div
              className="todo-text"
              onClick={() => {
                if (todo.status !== "done") {
                  setIsEditing(true);
                  setEditText(todo.text);
                }
              }}
            >
              {todo.text}
            </div>

            <div className="todo-dates">
              <p>作成日: {todo.createdAt}</p>
              <p>更新日: {todo.updatedAt}</p>
            </div>
          </div>

          <div className="todo-actions">
            <div className="status-buttons">
              <button onClick={() => updateStatus(todo.id, "todo")}>
                未対応
              </button>

              <button onClick={() => updateStatus(todo.id, "doing")}>
                対応中
              </button>

              <button onClick={() => updateStatus(todo.id, "done")}>
                完了
              </button>
            </div>

            <button
              className="delete-btn"
              onClick={() => {
                if (window.confirm("本当に削除しますか？")) {
                  deleteTodo(todo.id);
                }
              }}
            >
              削除
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            ref={inputRef}
            value={editText}
            disabled={todo.status === "done"}
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
              fontSize: "16px",
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
        </>
      )}
    </motion.li>
  );
}

export default TodoItem;
