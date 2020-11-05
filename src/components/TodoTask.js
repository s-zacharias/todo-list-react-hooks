import React from 'react';

const TodoTask = ({ id, task, onDelete }) => {
    return (
        <li id={id}>
            {task}
            <button onClick={() => onDelete(id)}>x</button>
        </li>
    );
};

export default TodoTask;