import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "@atoms/heading";
import { TodoInput } from "@organisms/TodoInput";
import { TodoList } from "@organisms/TodoList";
import styles from "./TodoTemplate.module.scss";
import { TodoTemplateProps } from "./types";
import { RootState } from "@store/index";
import { addTodo, completeTodo, deleteTodo } from "@store/slices/todosSlice";

const TodoTemplate: React.FC<TodoTemplateProps> = ({ onEditTodo }) => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );
  };

  const handleCompleteTodo = (id: number) => {
    dispatch(completeTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.todoTemplateContainer}>
      <Heading level="h1" className={styles.todoHeading}>
        ToDo List
      </Heading>
      <TodoInput onSubmit={handleAddTodo} className={styles.todoInput} />
      <TodoList
        todos={todos}
        onCompleteTodo={handleCompleteTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={onEditTodo}
        className={styles.todoList}
      />
    </div>
  );
};

export default TodoTemplate;
