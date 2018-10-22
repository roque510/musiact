import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './mainReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
	posts: mainReducer,
	post: postReducer
});

export default rootReducer;