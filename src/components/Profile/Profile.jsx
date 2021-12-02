import s from './profile.module.css';
import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';



const Profile = (props) => {

	return (
		<div className={s.content} >

			<ProfileInfo profile={props.profile} />

			<MyPostContainer posts={props.state}
				dispatch={props.dispatch}
			/>

		</div>
	);
}

export default Profile;