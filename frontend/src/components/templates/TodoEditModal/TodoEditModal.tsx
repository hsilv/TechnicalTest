import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TodoInput } from "@organisms/TodoInput";
import { TodoEditModalProps } from "./types";
import styles from "./TodoEditModal.module.scss";
import classNames from "classnames";
import { Button } from "@atoms/button";

const TodoEditModal: React.FC<TodoEditModalProps> = ({
  text,
  onSave,
  onCancel,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleSave = (newText: string) => {
    if (newText.trim()) {
      setIsVisible(false);
      setTimeout(() => onSave(newText), 300);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onCancel, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={classNames(styles.modalOverlay, {
        [styles.visible]: isVisible,
      })}
      onClick={handleOverlayClick}
    >
      <div
        className={classNames(styles.modal, className, {
          [styles.visible]: isVisible,
        })}
      >
        <div className={styles.modalContent}>
          <TodoInput
            type="edit"
            defaultValue={text}
            onSubmit={handleSave}
            className={styles.input}
          />
          <div className={styles.actions}>
            <Button styleType="solid" variant="danger" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TodoEditModal;
