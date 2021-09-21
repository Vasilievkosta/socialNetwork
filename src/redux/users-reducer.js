const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
		{id: 2, followed: true, fullName: 'Alex', status: 'I am a boss to', location: {city: 'Kyiv', country: 'Ukraine'}},
		{id: 3, followed: false, fullName: 'Sergio', status: 'I am a boss to', location: {city: 'Moscow', country: 'Russia'}},
		
	],
};

const usersReducer = (state = initialState, action) => {	
	switch (action.type) {			
		case FOLLOW:			
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {followed: false, ...u}
					}
					return u;
				})				
			}			
		case UNFOLLOW: 
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {followed: false, ...u}
					}
					return u;
				})
			}
		case SET_USERS: {
			return { users: [...state.users, ...action.users], ...state }
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
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;