import { TodoPage } from "@pages/TodoPage";
import { Provider } from "react-redux";
import { store } from "@store/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoPage />
      </Provider>
    </>
  );
}

export default App;
