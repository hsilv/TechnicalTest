import React, { useState } from "react";
import { TodoTemplate } from "@templates/TodoTemplate";
import { TodoEditModal } from "@templates/TodoEditModal";
import { useToDo } from "@hooks/toDo/useToDo";
import { Todo } from "@context/todo/types";

const TodoPage: React.FC = () => {
  const { todos, editTodo } = useToDo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const openModal = (todo: Todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTodo(null);
  };

  const handleSave = (newText: string) => {
    if (currentTodo) {
      editTodo(currentTodo.id, newText);
    }
    closeModal();
  };

  return (
    <div>
      <TodoTemplate todos={todos} onEditTodo={openModal} />
      {isModalOpen && currentTodo && (
        <TodoEditModal
          text={currentTodo.text}
          onSave={handleSave}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default TodoPage;
