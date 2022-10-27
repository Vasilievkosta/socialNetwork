import React from 'react';
import s from './users.module.css';
import imageFriend from '../../images/friend2.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	console.log(props.totalUsersCount);
	console.log(props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount / 120; i++) {
		pages.push(i);
	}

	return (
		<div className={s.user__content}>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p && s.user__selected}
						onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
				})}


			</div>
			{
				props.users.map(u => <div key={u.id}>
					<div className={s.user__wrap}>
						<div className={s.user__add}>
							<NavLink to={'/profile/' + u.id}>
								<img className={s.img} src={u.photos.small != null ? u.photos.small : imageFriend} alt="" />
							</NavLink>

							<div>
								{u.followed
									? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
									: <button onClick={() => { props.follow(u.id) }}>Follow</button>
								}
							</div>
						</div>
						<div className={s.user__field}>
							<p className={s.user__name}>{u.name}</p>
							<p className={s.user__sity}>{"u.location.city"}</p>
						</div>
					</div>
				</div>)
			}
		</div>
	)
}



export default Users;