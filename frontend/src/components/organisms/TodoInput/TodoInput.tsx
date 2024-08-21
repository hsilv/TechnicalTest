import React, { useState } from "react";
import { Input } from "@atoms/input";
import { IconizedButton } from "@molecules/IconizedButton";
import { ReactComponent as PlusIcon } from "@assets/plus.svg";
import { TodoInputProps } from "./types";
import styles from "./TodoInput.module.scss";
import classNames from "classnames";

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo, className = "" }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <div className={classNames(styles.todoInputContainer, className)}>
      <Input
        variant="primary"
        styleType="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className={styles.input}
      />
      <IconizedButton
        icon={PlusIcon}
        alignIcon="left"
        iconSize={16}
        iconColor="blue"
        onClick={handleAddTodo}
        className={styles.addButton}
      >
        Add
      </IconizedButton>
    </div>
  );
};

export default TodoInput;
