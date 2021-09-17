import s from './myPost.module.css';

import Post from './Post/Post';
import React from 'react';

import {addPostActionCreator} from '../../../redux/profile-reducer';
import {updateNewPostActionCreator} from '../../../redux/profile-reducer';

const MyPost = (props) => {
	
	let postsElement =
	props.posts.profilePage.posts.map(p => <Post message={p.message} like={p.likesCount} />);
	
	let newElement = React.createRef();
	
	let onPostChange = () => {
		let text = newElement.current.value;
		
		let action = updateNewPostActionCreator(text);
		props.dispatch( action );
	}

	let addOnePost = () => {
		props.dispatch( addPostActionCreator() );	
		
	}
	
	
	return ( 
		<div className = {s.content} >
		
			<textarea onChange={onPostChange} ref={newElement} value={props.posts.profilePage.newPostText}/>
			<button  onClick={addOnePost}>addPost</button>			
				
			{postsElement}			
			
		</div>
	);
}

export default MyPost;