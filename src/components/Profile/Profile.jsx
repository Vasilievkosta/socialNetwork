import s from './profile.module.css';
import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';



const Profile = (props) => {
	
	return ( 
		<div className = {s.content} >
			
			<ProfileInfo />
			
			<MyPost posts = {props.posts}
					dispatch = {props.dispatch}					
			/>
			
		</div>
	);
}

export default Profile;