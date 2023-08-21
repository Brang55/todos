import { Header } from "./components/Header/Header";

import "./App.css";
import { NewTodo } from "./components/NewTodo/NewTodo";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <NewTodo />
      </main>
    </div>
  );
}

export default App;
