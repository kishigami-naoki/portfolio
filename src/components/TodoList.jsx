import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

function TodoList({ todos, deleteTodo, updateStatus, editTodo }) {
  return (
    <ul>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateStatus={updateStatus}
            editTodo={editTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default TodoList;
