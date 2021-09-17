import s from './../dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

const Dialog =(props) => {
	let path = '/dialogs/'+ props.id;
	return (
		<li className={s.dialogs__item}>
			<NavLink className={s.link} activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
		</li>
	);
}

export default Dialog;