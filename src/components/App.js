import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]); 

  
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

 
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>React To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
