import React from 'react';

import s from './dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
	
let dialogsElement = props.messagesPage.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
let messagesElement = props.messagesPage.messages.map(m => <Message message={m.message} />);	

	let newElement = React.createRef();
	
	let onMessChange = () => {
		let text = newElement.current.value;		
		props.updateNewMess(text);
	}
	
	let addNewMess = () => {
		props.addNewMess();
	}	

	return ( 
		<div className = {s.content}>
			<div className = {s.dialogs}>
			
				<ul className={s.dialogs__list}>				
					{dialogsElement}					
				</ul>				
			</div>
			
			<div className = {s.messages}>
			
				<textarea onChange={onMessChange} placeholder="my massage" ref={newElement} value={props.messagesPage.newMessText}/>
				<button className = {s.messages__btn} onClick={addNewMess}>Add message</button>
			
				<ul className={s.messtages__list}>				
					{messagesElement}					
				</ul>				
			</div>			
		</div>
	);
}

export default Dialogs;