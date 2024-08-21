import { Todo } from "@context/todo/types";

export interface TodoTemplateProps {
  todos: Todo[];
  onEditTodo: (todo: Todo) => void;
}
