import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';//~so users can use app offline

// ~ How your root div gets all its inner divs: the function below
ReactDOM.render(<App />, document.getElementById('root'));
// ~ inserts JSX "App" (app is a component) into the HTML, ie, the DOM target 'root' in this case
// ~ <App /> is JSX (JS) code, not HTML

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // ~allows for offline use of your app
