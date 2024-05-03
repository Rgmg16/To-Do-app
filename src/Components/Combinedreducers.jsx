// rootReducer.js
import { combineReducers } from 'redux';
import taskReducer from './Reducers';

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
