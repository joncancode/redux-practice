import {createStore, applyMiddleware} from 'redux'

import {hotAndColdReducer} from './reducers';

const middleware = []

export default createStore(hotAndColdReducer);
