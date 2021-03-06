import React from 'react';
import Users from './Users';

import {connect} from 'react-redux';

import { followActionCreator } from '../../redux/users-reducer';
import { unfollowActionCreator } from '../../redux/users-reducer';
import { setUsersActionCreator } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowActionCreator(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		},
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);