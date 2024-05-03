import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask, completeTask } from './Action';
import SearchBar from './Searchbar';

const TaskList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleToggle = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEdit = (task) => {
        const newTaskText = window.prompt('Edit task:', task.title);
        if (newTaskText !== null) {
            const updatedTask = { ...task, title: newTaskText };
            dispatch(editTask(task.id, updatedTask));
        }
    };

    const handleComplete = (taskId) => {
        dispatch(completeTask(taskId));
    };

    const handleFilter = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2><u>Task List</u></h2>
            <SearchBar handleFilter={handleFilter} />
            <table className='table-auto border-2 border-blue-700 border-solid border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-blue-500 bg-yellow-400'><u>Title</u></th>
                        <th className='border border-blue-500 bg-yellow-400'><u>Action</u></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map(task => (
                        <tr key={task.id}>
                            <td className='border border-blue-500 bg-gray-400'>
                                <span
                                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                    onClick={() => handleToggle(task.id)}
                                    className='cursor-pointer'
                                >
                                    {task.title}
                                </span>
                            </td>
                            <td className='border border-blue-500'>
                                <button className='bg-red-600 border hover:bg-red-400 border-red-700' onClick={() => handleDelete(task.id)}>Delete</button>
                                <button className='bg-yellow-600 hover:bg-yellow-400 border border-yellow-700' onClick={() => handleEdit(task)}>Edit</button>
                                <button className='bg-green-600 hover:bg-green-400 border border-green-700' onClick={() => handleComplete(task.id)}>Mark as complete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;




