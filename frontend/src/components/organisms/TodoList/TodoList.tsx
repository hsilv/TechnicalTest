import React from "react";
import classNames from "classnames";
import { TodoItem } from "@organisms/TodoItem";
import styles from "./TodoList.module.scss";
import { TodoListProps } from "./types";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCompleteTodo,
  onDeleteTodo,
  onEditTodo,
  className = "",
}) => {
  return (
    <div className={classNames(styles.todoListContainer, className)}>
      <div className={styles.todoItems}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onCompleteTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
            onEdit={() => onEditTodo(todo)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
