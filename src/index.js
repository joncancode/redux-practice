import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store';

import {makeGuess} from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Provider store= {store}>
    <Game />
    </Provider>,
    document.getElementById('root')
);

console.log("here i am", store.getState());
store.dispatch(makeGuess("test"))
console.log("does this work", store.getState());
