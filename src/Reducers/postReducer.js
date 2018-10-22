import { FETCH_POST } from '../Actions/mainActions';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_POST:
			return action.payload;
		default:
			return state
	}
}