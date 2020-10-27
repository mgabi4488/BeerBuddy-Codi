import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

// 
const allReducers = combineReducers({
	isLogged: isLoggedReducer,
	counter: counterReducer
});

export default allReducers;