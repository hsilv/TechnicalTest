import { Heading } from "@atoms/heading";
import { TodoInput } from "@organisms/TodoInput";

function App() {
  return (
    <>
      <Heading level="h1">Todo List</Heading>
      <TodoInput onAddTodo={() => {}} />
    </>
  );
}

export default App;
