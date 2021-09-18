import s from './profile.module.css';
import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';



const Profile = (props) => {
	
	return ( 
		<div className = {s.content} >
			
			<ProfileInfo />
			
			<MyPostContainer posts = {props.posts}
					dispatch = {props.dispatch}					
			/>
			
		</div>
	);
}

export default Profile;