const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
	posts: [
		{id: 1, message: 'What wood you like?', likesCount: '15'},
		{id: 2, message: 'Where is your sister?', likesCount: '20'},
		{id: 3, message: 'Exuse me. What time is it?', likesCount: '19'}
	],
	newPostText: 'IT Samurai.com'
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPostText = state.newPostText;
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, {id:4, message: newPostText, likesCount: 3}]
			};			
		
		case UPDATE_NEW_POST: 
			return {
				...state,
				newPostText: action.newText	
			};
			
		default: return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
	({type: UPDATE_NEW_POST, newText: text});

export default profileReducer;