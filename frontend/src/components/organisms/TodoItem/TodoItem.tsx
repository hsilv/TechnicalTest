import React from "react";
import classNames from "classnames";
import { IconizedButton } from "@molecules/IconizedButton";
import { ReactComponent as CheckIcon } from "@assets/check.svg";
import { ReactComponent as TrashIcon } from "@assets/trash.svg";
import { TodoItemProps } from "./types";
import styles from "./TodoItem.module.scss";

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  onComplete,
  onDelete,
}) => {
  return (
    <div className={styles.todoItem}>
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
          {completed ? "Completed" : "Complete"}
        </IconizedButton>
        <IconizedButton
          icon={TrashIcon}
          alignIcon="left"
          iconSize={16}
          iconColor="white"
          onClick={onDelete}
          className={classNames(styles.actionButton, styles.deleteButton)}
        >
          Delete
        </IconizedButton>
      </div>
    </div>
  );
};

export default TodoItem;
