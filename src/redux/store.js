import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'What wood you like?', likesCount: '15'},
				{id: 2, message: 'Where is your sister?', likesCount: '20'},
				{id: 3, message: 'Exuse me. What time is it?', likesCount: '19'}
			],
			newPostText: 'IT Samurai.com'
		},
		messagesPage: {
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
			],
		},
	},
	_callSubscribe () {
		console.log('rerender');
	},
	
	getState () {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscribe = observer;
	},
	
	dispatch (action) {
		
		this._state.profilePage = profileReducer( this._state.profilePage, action );
		this._state.messagesPage = dialogsReducer( this._state.messagesPage, action );
		
		this._callSubscribe(this._state);		
	}
	
};




window.store = store;
export default store;

