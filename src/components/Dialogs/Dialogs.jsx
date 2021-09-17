import s from './dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import React from 'react';

import { updateNewMessActionCreator } from '../../redux/dialogs-reducer';
import { addMessActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
	console.log(props);
let dialogsElement = props.state.messagesPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
let messagesElement = props.state.messagesPage.messages.map(m => <Message message={m.message} />);	

	let newElement = React.createRef();
	
	let onMessChange = () => {
		let text = newElement.current.value;
		
		let action = updateNewMessActionCreator(text);
		props.dispatch ( action );
	}
	
	let addNewMess = () => {
		props.dispatch( addMessActionCreator() );
	}


	

	return ( 
		<div className = {s.content} >
			<div className = {s.dialogs}>			
				<ul className={s.dialogs__list}>
				
					{dialogsElement}
					
				</ul>
				
			</div>
			
			
			
			<div className = {s.messages}>			
			<textarea onChange={onMessChange} placeholder="my massage" ref={newElement} value={props.state.messagesPage.newMessText}/>			
			<button className = {s.messages__btn} onClick={addNewMess}>Add message</button>
			
				<ul className={s.messtages__list}>
				
					{messagesElement}
					
				</ul>
				
			</div>			
		</div>
	);
}

export default Dialogs;