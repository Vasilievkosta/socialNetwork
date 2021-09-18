import React from 'react';

import Dialogs from './Dialogs';

import { updateNewMessActionCreator } from '../../redux/dialogs-reducer';
import { addMessActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {	
	
	let onMessChange = (text) => {		
		let action = updateNewMessActionCreator(text);
		props.dispatch ( action );
	}
	
	let addNewMess = () => {
		props.dispatch( addMessActionCreator() );
	}


	

	return <Dialogs updateNewMess={onMessChange} addNewMess={addNewMess} state={props.state} />
	
}

export default DialogsContainer;