import {createStore, applyMiddleware, compose} from 'redux'

import {hotAndColdReducer} from './reducers';

const middleware = []

export default createStore(hotAndColdReducer);
