import { useState, useRef, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos
      ? JSON.parse(savedTodos).map((todo) => ({
          ...todo,
          status: todo.status || (todo.completed ? "done" : "todo"),
        }))
      : [];
  });

  const addTodo = (text) => {
    if (!text.trim()) return;
    const now = new Date().toLocaleString();
    const newTodo = {
      id: Date.now(),
      text,
      status: "todo",
      createdAt: now,
      updatedAt: now,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateStatus = (id, status) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, status, updatedAt: new Date().toLocaleString() }
          : todo,
      ),
    );
  };

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "todo") return todo.status === "todo";
    if (filter === "doing") return todo.status === "doing";
    if (filter === "done") return todo.status === "done";
    return true;
  });

  const activeCount = todos.filter((todo) => todo.status !== "done").length;

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.status !== "done"));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
              updatedAt: new Date().toLocaleString(),
            }
          : todo,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1 className="title">Task Manager</h1>
      <h2>Reactで作成したタスク管理アプリです。</h2>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateStatus={updateStatus}
        editTodo={editTodo}
      />
      <Filter filter={filter} onChangeFilter={setFilter} />
      <p>残りタスク{activeCount}</p>
      <button className="clear-btn" onClick={clearCompleted}>
        クリア
      </button>
      <Weather />
    </div>
  );
}

export default App;
