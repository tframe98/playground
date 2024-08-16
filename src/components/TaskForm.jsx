import React, { useState } from 'react';

const TaskForm = ({ onAddtask }) => {
    const [taskName, setTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddtask({ name: taskName});
        setTaskName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;