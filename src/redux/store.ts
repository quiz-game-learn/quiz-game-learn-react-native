import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './reducers';
//import {createLogger} from 'redux-logger';

//const loggerMiddleware = createLogger();

const middleware = applyMiddleware(thunkMiddleware,
    //loggerMiddleware
);
export const store = createStore(rootReducer, middleware);
