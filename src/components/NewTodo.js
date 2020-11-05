import React, { useState } from 'react';

const NewTodo = ({ onFormSubmit }) => {
    const [todo, setTodo] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(todo);
        setTodo('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
            />
            <button>Add</button>
        </form>
    );
};

export default NewTodo;