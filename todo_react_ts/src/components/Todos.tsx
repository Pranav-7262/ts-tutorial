import { useState } from "react";
import { useTodos } from "../store/Todos";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, deleteTodo, updateTodo } = useTodos();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  if (!todos.length) {
    return <p>No todos yet 🚀</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodoAsCompleted(todo.id)}
          />

          {editingId === todo.id ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button
                onClick={() => {
                  updateTodo(todo.id, editValue);
                  setEditingId(null);
                }}
              >
                SAVE
              </button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>

              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setEditValue(todo.task);
                }}
              >
                EDIT
              </button>
            </>
          )}

          {todo.completed && (
            <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
