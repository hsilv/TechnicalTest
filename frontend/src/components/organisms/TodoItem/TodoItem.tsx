import React from "react";
import classNames from "classnames";
import { IconizedButton } from "@molecules/IconizedButton";
import { ReactComponent as CheckIcon } from "@assets/check.svg";
import { ReactComponent as TrashIcon } from "@assets/trash.svg";
import { ReactComponent as EditIcon } from "@assets/edit.svg";
import { TodoItemProps } from "./types";
import styles from "./TodoItem.module.scss";

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  className = "",
  onComplete,
  onDelete,
  onEdit,
}) => {
  return (
    <div className={classNames(styles.todoItem, className)}>
      <span
        className={classNames(styles.text, { [styles.completed]: completed })}
      >
        {text}
      </span>
      <div className={styles.actions}>
        <IconizedButton
          icon={CheckIcon}
          alignIcon="left"
          iconSize={16}
          iconColor="none"
          iconStroke={completed ? "gray" : "white"}
          onClick={onComplete}
          className={classNames(
            styles.actionButton,
            completed ? styles.completedButton : styles.completeButton
          )}
        >
          {completed ? "Completado" : "Completar"}
        </IconizedButton>
        <IconizedButton
          icon={TrashIcon}
          alignIcon="left"
          iconSize={16}
          iconColor="white"
          onClick={onDelete}
          className={classNames(styles.actionButton, styles.deleteButton)}
        >
          Eliminar
        </IconizedButton>
        <IconizedButton
          icon={EditIcon}
          alignIcon="left"
          iconSize={16}
          iconColor="#666666"
          onClick={onEdit}
          className={classNames(styles.actionButton, styles.editButton)}
        >
          Editar
        </IconizedButton>
      </div>
    </div>
  );
};

export default TodoItem;
