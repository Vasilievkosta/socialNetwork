import React from 'react';
import {connect} from 'react-redux';

import Dialogs from './Dialogs';

import { updateNewMessActionCreator } from '../../redux/dialogs-reducer';
import { addMessActionCreator } from '../../redux/dialogs-reducer';



// const DialogsContainer = (props) => {	
	// let onMessChange = (text) => {		
		// let action = updateNewMessActionCreator(text);
		// props.dispatch ( action );
	// }	
	// let addNewMess = () => {
		// props.dispatch( addMessActionCreator() );
	// }
	// return <Dialogs updateNewMess={onMessChange} addNewMess={addNewMess} state={props.state} />
// }


let mapStateToProps = (state) => {
	
	return {
		messagesPage: state.messagesPage
	}
}
let mapDispatchToProps = (dispatch) => {
	
	return {
		updateNewMess: (text) => {
			dispatch( updateNewMessActionCreator(text) );
		},
		addNewMess: () => {
			dispatch( addMessActionCreator() );
		}
	}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;




