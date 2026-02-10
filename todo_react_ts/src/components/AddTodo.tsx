import React, { useState } from "react";
import { useTodos } from "../store/Todos";

const AddTodo = () => {
  const [todo, settodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddTodo(todo);
    settodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          settodo(e.target.value)
        }
      />
      <button type="submit" disabled={Number(todo.length) < 4}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
