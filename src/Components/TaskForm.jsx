// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './Action';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    setTitle('');
  };

  return (
    <div>
      <h2><u>Add Task</u></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-green-700 rounded-lg'
        />
        <button className='bg-green-600 hover:bg-green-400 rounded-lg border-2 border-black' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
