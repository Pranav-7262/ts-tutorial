import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <main>
      <h2>TODO with React + TS</h2>
      <AddTodo />
      <Todos />
    </main>
  );
};

export default App;
