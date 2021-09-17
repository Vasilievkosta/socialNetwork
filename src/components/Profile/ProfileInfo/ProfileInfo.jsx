import s from './profileInfo.module.css';
import React from 'react';

const ProfileInfo = () => {
	
	let elem = React.createRef();
	let addMail = () => {
		let text = elem.current.value;
		alert(text);
		elem.current.value = "";
	}
	
	return ( 
		<div>
			<ul className={s.list}>
			<li><a className={s.link} href="#">Profile</a></li>
			<li><a className={s.link} href="#">Messages</a></li>
			<li><a className={s.link} href="#">Messages</a></li>
		</ul>
		<textarea ref={elem}></textarea>
		<button onClick={addMail}>Go</button>
		</div>			
		
		
	);
}

export default ProfileInfo;