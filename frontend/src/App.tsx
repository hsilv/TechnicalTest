import { useState } from "react";
import { Heading } from "@atoms/heading";
import TodoItem from "@organisms/TodoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Aprende React porque está bueno aprender pana, la verdad es que  me ha servido un montón puede ser y es que",
      completed: false,
    },
    { text: "Build a Todo App", completed: false },
  ]);

  const handleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <Heading level="h1">Todo List</Heading>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => handleComplete(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
