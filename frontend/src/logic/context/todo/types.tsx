export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}
