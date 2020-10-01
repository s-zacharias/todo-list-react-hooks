import React from 'react';
import TodoTask from './TodoTask';

const TodoList = (props) => {
    const renderedList = props.content.map((todo, index) => {
        return <TodoTask task={todo} key={index} id={index} onDelete={props.onTaskDelete}/>;
    });
    return <div>{renderedList}</div>
};

export default TodoList;