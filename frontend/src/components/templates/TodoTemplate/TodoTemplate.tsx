import React from "react";
import { Heading } from "@atoms/heading";
import { TodoInput } from "@organisms/TodoInput";
import { TodoList } from "@organisms/TodoList";
import styles from "./TodoTemplate.module.scss";
import { useToDo } from "@hooks/toDo/useToDo";
import { TodoTemplateProps } from "./types";

const TodoTemplate: React.FC<TodoTemplateProps> = ({ onEditTodo }) => {
  const { todos, addTodo, completeTodo, deleteTodo } = useToDo();

  return (
    <div className={styles.todoTemplateContainer}>
      <Heading level="h1" className={styles.todoHeading}>
        Todo List
      </Heading>
      <TodoInput onSubmit={addTodo} className={styles.todoInput} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={onEditTodo}
        className={styles.todoList}
      />
    </div>
  );
};

export default TodoTemplate;
