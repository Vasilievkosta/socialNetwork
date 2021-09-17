const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS = 'UPDATE-NEW-MESS';

let initialState = {
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'I am fine, thanks'},
		{id: 4, message: 'Can I ask you a question?'},
		{id: 5, message: 'What?'},
		{id: 6, message: 'I see you drawing every day.'}
	],
	newMessText: '',
	dialogs: [
		{id: 1, name: 'Margaret'},
		{id: 2, name: 'Lusia'},
		{id: 3, name: 'Yura'},
		{id: 4, name: 'Victor'},
		{id: 5, name: 'Alex'},
		{id: 6, name: 'Valera'},			
	]
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESS:
			state.newMessText = action.newText;
			return state;		
		
		case ADD_MESS:
			let newMess = {
				id: 7,
				message: state.newMessText,
			};
				
			state.messages.push(newMess);		
			state.newMessText = '';
			return state;
			
		default: return state;
	}
}
export const addMessActionCreator = () => {
	return {
		type: ADD_MESS
	}
}
export const updateNewMessActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESS,
		newText: text
	}
}

export default dialogsReducer;