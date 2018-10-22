import { FETCH_POSTS } from '../Actions/mainActions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_POSTS:
			console.log("im here!");
			return action.payload;
		default:
			return state
	}
}