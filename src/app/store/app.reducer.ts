import {combineReducers} from 'redux';

export const appReducer = combineReducers({
  user : (state = {}) => state,
  list : (state = []) => state
});
