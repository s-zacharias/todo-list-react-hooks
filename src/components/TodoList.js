import React from 'react';
import TodoTask from './TodoTask';

const TodoList = ({ content, onTaskDelete }) => {
    const renderedList = content.map((todo, index) => {
        return (
        <TodoTask 
            task={todo} 
            key={index} 
            id={index} 
            onDelete={onTaskDelete}
        />
        );
    });
    return <div>{renderedList}</div>;
};

export default TodoList;