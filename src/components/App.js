import React from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class App extends React.Component {
    state = { item: '', list: ['puppy', 'bunny', 'turtle'] };

    // create an onSubmit ftn that adds the current state item to the state list
    onSubmit = (event) => {
        this.setState({ list: [...this.state.list, event]});
    };

    // create an onDelete ftn that removes the current item (using the id) from the state list (pass as prop to todolist -> todotask)
    onDelete = (key) => {
        const newList = []; 
        for (let i = 0; i < this.state.list.length; i++) {
            if (i !== key) {
                newList.push(this.state.list[i]);
            }
        }
        this.setState({ list: newList });
    };

    render() {
        return (
            <div>
                <NewTodo onFormSubmit={this.onSubmit} />
                <TodoList onTaskDelete={this.onDelete} content={this.state.list} />
            </div>
        );
    }
}

export default App;


// create App component to hold everything
// create NewTodo component to handle input and add a new task to the state list 
    // onSubmit -> setState to add to list
// create a TodoList component to hold all tasks
// create a TodoTask component to create individual tasks
    // onDelete -> setState to remove from list

// APP
    // NewTodo
    // TodoList -> TodoTask (when passing info from the child to the parent use a callback as a prop)

// TODO: add new task functionality!! -> then add delete task! -> done!