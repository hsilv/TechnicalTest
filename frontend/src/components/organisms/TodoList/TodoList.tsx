import React from "react";
import { TodoItem } from "@organisms/TodoItem";
import styles from "./TodoList.module.scss";
import { TodoListProps } from "./types";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCompleteTodo,
  onDeleteTodo,
  onEditTodo,
}) => {
  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoItems}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onCompleteTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
            onEdit={() => {
              const newText = prompt("Edit todo", todo.text);
              if (newText) {
                onEditTodo(todo.id, newText);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
