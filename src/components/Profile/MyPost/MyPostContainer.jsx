import React from 'react';

import MyPost from './MyPost';

import {addPostActionCreator} from '../../../redux/profile-reducer';
import {updateNewPostActionCreator} from '../../../redux/profile-reducer';

const MyPostContainer = (props) => {	
	
	let onPostChange = (text) => {		
		let action = updateNewPostActionCreator(text);
		props.dispatch( action );		
	}	
	
	let addOnePost = () => {
		props.dispatch(addPostActionCreator());
		
	}
	
	return ( <MyPost updateNewPost={onPostChange} addOnePost={addOnePost} posts={props.posts}/> );
}

export default MyPostContainer;