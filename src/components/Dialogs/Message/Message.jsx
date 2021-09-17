import s from './../dialogs.module.css';


const Message =(props) => {	
	return (
		<p className={s.messages__item}>{props.message}</p>
	);
}

export default Message;