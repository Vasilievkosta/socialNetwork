import React from 'react';
import * as axios from 'axios';
import s from './users.module.css';
import imageFriend from '../../images/friend2.png';


class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		});
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount / 100; i++) {
			pages.push(i);
		}
		return (
			<div className={s.user__content}>
				<div>
					{pages.map(p => {
						return <span className={this.props.currentPage === p && s.user__selected}
							onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
					})}


				</div>
				{
					this.props.users.map(u => <div key={u.id}>
						<div className={s.user__wrap}>
							<div className={s.user__add}>
								<img className={s.img} src={u.photos.small != null ? u.photos.small : imageFriend} alt="" />

								<div>
									{u.followed
										? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
										: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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

};

export default Users;