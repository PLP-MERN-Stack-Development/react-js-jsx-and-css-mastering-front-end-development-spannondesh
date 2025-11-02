import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}
