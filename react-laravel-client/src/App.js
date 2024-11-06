import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleAddTask = async () => {
    await addTask({ title: newTask, completed: false });
    setNewTask('');
    fetchTasks();
  };

  const handleToggleComplete = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => handleToggleComplete(task.id, task.completed)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.title}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
