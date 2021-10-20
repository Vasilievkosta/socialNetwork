// import React from 'react';
import * as axios from 'axios';
import s from './users.module.css';
import imageFriend from '../../images/friend2.png';


let Users = (props) => {



	if (props.users.length === 0) {

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items)
		});

		// props.setUsers([
		// 	{ id: 1, photoUrl: imageFriend, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
		// 	{ id: 2, photoUrl: imageFriend, followed: true, fullName: 'Alex', status: 'I am a boss to', location: { city: 'Kyiv', country: 'Ukraine' } },
		// 	{ id: 3, photoUrl: imageFriend, followed: false, fullName: 'Sergio', status: 'I am a boss to', location: { city: 'Moscow', country: 'Russia' } }
		// ]
		// )

	}
	return (
		<div className={s.user__content}>
			{
				props.users.map(u => <div key={u.id}>
					<div className={s.user__wrap}>
						<div className={s.user__add}>
							<img className={s.img} src={u.photoUrl} alt="" />

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
};

export default Users;