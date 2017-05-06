import {combineReducers} from 'redux';

export const appReducer = combineReducers({
  api  : (state = {}) => state,
  user : (state = {}) => state,
  users: (state = []) => state
});
