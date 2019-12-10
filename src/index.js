import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state={ kittyKat: 'Meow' }, action) => {
    // action = {
    //     type: ''
    // }
    
    if (action.type === 'WOOT_ONE') {
        console.log(`Hey!!! I'm a reducer in the store.`);
        console.log('action:', action);
        return {
            ...state,
            message: 'Totes WOOTed!!!',
        };
    } else if (action.type === 'NO_WOOT_ONE') {
        return {
            ...state,
            message: '',
        };
    }
    return state;
};

const secondReducer = (state={}, action) => {
    if (action.type === 'WOOT_TWO') {
        console.log(`I'm a tea pot....`);
        console.log('action:', action);
        return {
            ...state,
            teaPot: 'Earl Grey, soooooo grey.',
        }
    } else if (action.type === 'NO_WOOT_TWO') {
        return {
            ...state,
            teaPot: 'no tea :(',
        }

    } else {
        return state;
    }
   
    // return state;
};

const dogReducer = (state=[], action) => {
    if (action.type === 'ADD_DOG') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

const catReducer = (state=[], action) => {
    if (action.type === 'ADD_CAT') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        firstReducer: firstReducer,
        secondReducer,
        catReducer,
        dogReducer
    })
    // manages our state data model in redux
    
); 

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
