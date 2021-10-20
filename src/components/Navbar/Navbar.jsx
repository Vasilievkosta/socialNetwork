import s from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import image from '../../images/Iam.png';
import imageFriend from '../../images/friend4.png';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<li><NavLink className={s.link} activeClassName={s.activeLink} to="/Profile">Profile</NavLink></li>
				<li><NavLink className={s.link} activeClassName={s.activeLink} to="/Dialogs">Messages</NavLink></li>
				<li><NavLink className={s.link} activeClassName={s.activeLink} to="/New">New</NavLink></li>
				<li><NavLink className={s.link} activeClassName={s.activeLink} to="/Music">Music</NavLink></li>
				<li><NavLink className={s.link} activeClassName={s.activeLink} to="/Setting">Setting</NavLink></li>
				<li><NavLink className={s.link} activeClassName={s.activeLink} to="/Users">Users</NavLink></li>
			</ul>

			<img className={s.img} src={imageFriend} alt="" />
			<p>
				<img src={image} alt="" />
			</p>
		</nav>
	);
}

export default Navbar;