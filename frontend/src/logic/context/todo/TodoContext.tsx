import React, { createContext, ReactNode } from "react";
import { Todo } from "./types";
import { useLocalStorage } from "@hooks/localStorage";
import { TodoContextProps } from "./types";

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, completeTodo, deleteTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
