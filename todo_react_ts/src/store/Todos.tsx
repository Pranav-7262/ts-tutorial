import { createContext, useContext, type ReactNode, useState } from "react";

import type { Todo } from "../types";

export interface TodoContext {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, task: string) => void;
}

export interface TodosProviderProps {
  children: ReactNode;
}
export const todosContext = createContext<TodoContext | null>(null);
export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, settodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    settodos((prev) => [
      {
        id: Date.now().toString(),
        task,
        completed: false,
        createdAt: new Date(),
      },
      ...prev,
    ]);
  };

  const toggleTodoAsCompleted = (id: string) => {
    settodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    const check: boolean = window.confirm("Are you sure ?");
    if (check) {
      settodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  const updateTodo = (id: string, task: string) => {
    settodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: task } : todo)),
    );
  };
  return (
    <todosContext.Provider
      value={{
        todos,
        handleAddTodo,
        toggleTodoAsCompleted,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

//consumer
export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("useTodo used outside the Provider");
  }
  return todosConsumer;
};
