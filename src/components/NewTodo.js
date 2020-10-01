import React from 'react';

class NewTodo extends React.Component {
    state = { todo: '' };

    // create an onChange ftn that takes the value of the text input and sets it to the state todo
    onChange = (event) => {
        this.setState({ todo: event.target.value });
    };

    // create an onSubmit ftn that takes the value of the todo and updates the callback prop
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.todo);
        this.setState({ todo:'' }); // clean the slate for the next todo
    };


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.todo} onChange={this.onChange} />
                <button>Add</button>
            </form>
        );
    };
}

export default NewTodo;