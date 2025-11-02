import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./myapp.css";

/**
 * MyApp Component
 * 
 * The main application component that combines:
 * - Navigation bar
 * - Todo list functionality
 * - Footer
 * 
 * Manages the todo list state and provides functionality
 * to add new todos.
 */
function MyApp() {
  // State for storing the list of todos
  const [todos, setTodos] = useState([]);
  // State for managing the input field text
  const [inputText, setInputText] = useState("");

  /**
   * Handles adding a new todo item
   * 
   * Validates that the input is not empty (excluding whitespace)
   * Creates a new todo with unique ID using timestamp
   * Adds the new todo to the list and clears the input
   */
  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      // Add new todo with unique ID and current input text
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      // Clear the input field
      setInputText("");
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="todo-container">
          <h2>My Todo List</h2>
          <div className="todo-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
          </div>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
