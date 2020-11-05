import React, { useState } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const App = () => {
    const [list, setList] = useState([]);

    const onDelete = (key) => {
        const newList = [];
        list.forEach((el, index) => {
            if (index !== key) {
                newList.push(el);
            }
        });
        setList(newList);
    };

    return (
        <div>
            <NewTodo onFormSubmit={(e) => setList([...list, e])} />
            <TodoList onTaskDelete={onDelete} content={list} />
        </div>
    );
};

export default App;
