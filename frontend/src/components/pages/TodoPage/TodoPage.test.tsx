import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@store/index";
import TodoPage from "./TodoPage";
import { addTodo } from "@store/slices/todosSlice";

describe("TodoPage Test Suite", () => {
  it("renders the TodoTemplate component", () => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );
    expect(screen.getByText("ToDo List")).toBeInTheDocument();
  });

  it("opens the edit modal when an edit button is clicked", () => {
    store.dispatch(
      addTodo({
        id: 1,
        text: "Test Todo",
        completed: false,
      })
    );

    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    fireEvent.click(screen.getByText("Editar"));

    expect(screen.getByPlaceholderText("Edita tu ToDo")).toBeInTheDocument();
  });
});
