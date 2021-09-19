import React from 'react';
import s from './myPost.module.css';

import Post from './Post/Post';

const MyPost = (props) => {
	
	let postsElement =
	props.posts.map(p => <Post message={p.message} like={p.likesCount} />);
	
	let newElement = React.createRef();
	
	let onPostChange = () => {
		let text = newElement.current.value;
		props.updateNewPost(text);
		
		// let action = updateNewPostActionCreator(text);
		// props.dispatch( action );
	}

	let addOnePost = () => {
		props.addOnePost();
		
	}	
	
	return ( 
		<div className = {s.content} >
		
			<textarea onChange={onPostChange} ref={newElement} value={props.newPostText}/>
			<button  onClick={addOnePost}>addPost</button>			
				
			{postsElement}			
			
		</div>
	);
}

export default MyPost;