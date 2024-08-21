import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoTemplate } from "@templates/TodoTemplate";
import { TodoEditModal } from "@templates/TodoEditModal";
import { RootState } from "@store/index";
import { editTodo } from "@store/slices/todosSlice";
import { Todo } from "@context/todo/types";

const TodoPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
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
      dispatch(
        editTodo({
          id: currentTodo.id,
          newTodo: { text: newText },
        })
      );
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
