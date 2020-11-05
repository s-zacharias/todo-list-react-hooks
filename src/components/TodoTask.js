import React from 'react';

class TodoTask extends React.Component {
    onDelete = (event) => {
        this.props.onDelete(this.props.id);
    };

    render() {
        return (
            <li id={this.props.id}>
                {this.props.task}
                <button onClick={this.onDelete}>x</button>
            </li>
        );
    };
}

export default TodoTask;