import { Todo } from "@context/todo";

export interface TodoListProps {
  todos: Todo[];
  onCompleteTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (todo: Todo) => void;
  className?: string;
}
