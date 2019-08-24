import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
    if (action.type === 'FEELING') {
        return [action.payload];
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'UNDERSTANDING') {
        return [action.payload];
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'SUPPORT') {
        return [action.payload];
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'COMMENTS') {
        return [action.payload];
    }
    return state;
}

const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
