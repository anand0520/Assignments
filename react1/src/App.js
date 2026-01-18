import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTodos = [...todos, task.trim()].sort((a, b) =>
      a.localeCompare(b)
    );

    setTodos(updatedTodos);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="todo-container">
      <h2>📝 My To-Do List</h2>

      <input
        type="text"
        className="todo-input"
        placeholder="✍️ Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="add-btn" onClick={addTask}>
        ➕ Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            ✅ {todo}
            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
