import React from 'react';
// import imageFriend from '../images/friend2.png';
// import imageFriend_3 from '../images/friend3.png';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';



let initialState = {
	users: [
		// { id: 1, photoUrl: imageFriend, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
		// { id: 2, photoUrl: imageFriend, followed: true, fullName: 'Alex', status: 'I am a boss to', location: { city: 'Kyiv', country: 'Ukraine' } },
		// { id: 3, photoUrl: imageFriend, followed: false, fullName: 'Sergio', status: 'I am a boss to', location: { city: 'Moscow', country: 'Russia' } },
		// { id: 4, photoUrl: imageFriend_3, followed: false, fullName: 'Sergio', status: 'I am a boss to', location: { city: 'Moscow', country: 'Russia' } }
	],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 2
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}

		default:
			return state;
	}
}
export const followActionCreator = (userId) => {
	return {
		type: FOLLOW, userId
	}
}
export const unfollowActionCreator = (userId) => {
	return {
		type: UNFOLLOW, userId
	}
}
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default usersReducer;