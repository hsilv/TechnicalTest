import { TodoProvider } from "@context/todo";
import { TodoPage } from "@pages/TodoPage";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
    </>
  );
}

export default App;
