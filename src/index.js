import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

// Make a plan! -> simple todo list; just add stuff for now
// I need: an input text bar, ul to store todos (component to store new todos), 
// create new todos as li (component to create new todos from the input text bar)