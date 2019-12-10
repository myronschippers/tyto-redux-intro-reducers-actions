import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = () => {
    console.log(`Hey!!! I'm a reducer in the store.`);
    return {};
};

const secondReducer = () => {
    console.log(`I'm a tea pot....`);
    return {};
};

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer
    })
    // manages our state data model in redux
    
); 

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
