import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoItemReducer } from './reducers/todoItemReducer';
import { filterLinkReducer } from './reducers/filterLinkReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const myCustomLogger = (store) => (next) => (action) => {
    console.log(action, 'show action');
    next(action);
}
const store = createStore(combineReducers({ todoItems: todoItemReducer, filters: filterLinkReducer }), applyMiddleware(myCustomLogger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;