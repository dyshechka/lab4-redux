import { combineReducers } from 'redux';
import todos from './todos';
import editTodo from './editTodo';

const reducersApp = combineReducers({
    todos,
    editTodo
});

export default reducersApp;
