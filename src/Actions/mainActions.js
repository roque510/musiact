import { database } from '../Firebase';
import * as firebase from 'firebase';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = "fetch_post";


export function getPosts(){
	
	return dispatch => { database.on('value', data => {
		
			dispatch({
				type: FETCH_POSTS,
				payload: data.val()
			})
		})
	}
}

export function getPost(id){
    if(id === null || !id)
    id = '-KxLAh-nzUe8KgjVvJpU';
    
    const data = firebase.database().ref('/posts/'+ id );
    console.log(data);
	return dispatch => { data.on('value', data => {
		
			dispatch({
				type: FETCH_POST,
				payload: data.val()
			})
		})
	}
}