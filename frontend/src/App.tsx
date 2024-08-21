import { TodoProvider } from "@context/todo";
import { TodoTemplate } from "@templates/TodoTemplate";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoTemplate />
      </TodoProvider>
    </>
  );
}

export default App;
