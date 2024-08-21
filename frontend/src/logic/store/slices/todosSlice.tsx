import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@context/todo";
import { loadState, saveState } from "@store/localStorage";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: loadState("todos") || [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      saveState("todos", state.todos);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveState("todos", state.todos);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveState("todos", state.todos);
    },
    editTodo: (
      state,
      action: PayloadAction<{ id: number; newTodo: Partial<Todo> }>
    ) => {
      const { id, newTodo } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        Object.assign(todo, newTodo);
        saveState("todos", state.todos);
      }
    },
  },
});

export const { addTodo, completeTodo, deleteTodo, editTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
