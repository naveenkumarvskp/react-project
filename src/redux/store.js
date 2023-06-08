import {applyMiddleware, createStore} from 'redux';
import {userReducer} from './reducers/user';
import createSagaMiddleware from 'redux-saga';
import {watchUser} from './sagas/users.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser);
