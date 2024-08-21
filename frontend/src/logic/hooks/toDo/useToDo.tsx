import { useContext } from "react";
import { TodoContext } from "@context/todo";

export const useToDo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
