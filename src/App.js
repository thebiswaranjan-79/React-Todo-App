import './App.css';
import Todo from "./components/Todo"
function App() {
  const todos = [
    {data : "Task 1", id : 565643},
    {data : "Task 2", id : 374893},
    {data : "Task 3", id : 479948},
  ];

  return (
    <div className="App">
      <main>
        <Todo todoList = {todos}/>
      </main>
    </div>
  );
}

export default App;
