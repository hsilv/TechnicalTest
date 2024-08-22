import React, { useState, useEffect } from "react";
import { Input } from "@atoms/input";
import { IconizedButton } from "@molecules/IconizedButton";
import { ReactComponent as PlusIcon } from "@assets/plus.svg";
import { ReactComponent as EditIcon } from "@assets/edit.svg";
import { TodoInputProps } from "./types";
import styles from "./TodoInput.module.scss";
import classNames from "classnames";

const TodoInput: React.FC<TodoInputProps> = ({
  onSubmit,
  className = "",
  type = "add",
  defaultValue,
}) => {
  const [text, setText] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue) {
      setText(defaultValue);
    }
  }, [defaultValue]);

  const handleAddTodo = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className={classNames(styles.todoInputContainer, className)}>
      <Input
        variant="primary"
        styleType="outlined"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={type === "add" ? "Agrega un nuevo ToDo" : "Edita tu ToDo"}
        className={styles.input}
      />
      <IconizedButton
        icon={type === "add" ? PlusIcon : EditIcon}
        alignIcon="left"
        iconSize={16}
        iconColor="#666666"
        onClick={handleAddTodo}
        className={classNames(
          styles.button,
          type === "add" ? styles.addButton : styles.editButton
        )}
      >
        {type === "add" ? "Agregar" : "Editar"}
      </IconizedButton>
    </div>
  );
};

export default TodoInput;
