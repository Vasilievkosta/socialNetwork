import React from 'react';
import {connect} from 'react-redux';

import MyPost from './MyPost';

import {addPostActionCreator} from '../../../redux/profile-reducer';
import {updateNewPostActionCreator} from '../../../redux/profile-reducer';

// const MyPostContainer = (props) => {	
	// let onPostChange = (text) => {		
		// let action = updateNewPostActionCreator(text);
		// props.dispatch( action );		
	// }		
	// let addOnePost = () => {
		// props.dispatch(addPostActionCreator());		
	// }	
	// return ( <MyPost updateNewPost={onPostChange} addOnePost={addOnePost} posts={props.posts}/> );
// }


let mapStateToProps = (state) => {
	
	return {
		
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
		
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPost: (text) => {
			dispatch( updateNewPostActionCreator(text) );
		},
		addOnePost: () => {
			dispatch( addPostActionCreator() );
		}
	}
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;