import React from "react";
import { Heading } from "@atoms/heading";
import { TodoInput } from "@organisms/TodoInput";
import { TodoList } from "@organisms/TodoList";
import styles from "./TodoTemplate.module.scss";
import { useToDo } from "@hooks/toDo/useToDo";

const TodoTemplate: React.FC = () => {
  const { todos, addTodo, completeTodo, deleteTodo, editTodo } = useToDo();

  return (
    <div className={styles.todoTemplateContainer}>
      <Heading level="h1">Todo List</Heading>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </div>
  );
};

export default TodoTemplate;
