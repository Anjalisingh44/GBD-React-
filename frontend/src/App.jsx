import React, { useState } from 'react';
import ToDoApp from './component/ToDoApp';
import './index.css';

const App = () => {
  const [tasks, settasks] = useState([
    { title: 'Finish project', priority: 'high' },
    { title: 'Buy groceries', priority: 'medium' },
    { title: 'Walk the dog', priority: 'low' }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState(''); 

  const handleTitleChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setNewTaskPriority(event.target.value);
  };

  const addTask = () => {
    if (newTaskTitle && newTaskPriority) {
      settasks([...tasks, { title: newTaskTitle, priority: newTaskPriority }]);
      setNewTaskTitle(''); 
      setNewTaskPriority('');
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    settasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <div className='input'>
        <input
          type="text"
          placeholder="Enter task title..."
          value={newTaskTitle}
          onChange={handleTitleChange}
        />
        <select  className='priority' value={newTaskPriority} onChange={handlePriorityChange}>
          <option value="">Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button  onClick={addTask}>
          Add New Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <ToDoApp title={task.title} priority={task.priority} />
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
