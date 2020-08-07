import React, { useState, useEffect } from 'react';

function Home() {
	const [user, setUser] = useState(null);
	const [friends, setFriends] = useState([]);

	function getFriendsComponents() {
		if (friends.length) {
			return friends.map((friend) => (
				<li key={friend.id}>
					<img src={friend.photo_100} alt={friend.last_name} />
					<span>
						{friend.first_name} {friend.last_name}
					</span>
				</li>
			));
		}
	}

	useEffect(() => {
		//eslint-disable-next-line no-undef
		VK.Api.call ('users.get', {v:"5.73"}, function (r) {
			if (r.response) {
				setUser(r.response[0]);
			}
		});
		//eslint-disable-next-line no-undef
		VK.Api.call ('friends.get',{count:5, fields:"nickname, photo_100", v:"5.73"}, function (r) {
			if (r.response) {
				setFriends(r.response.items);
			}
		});
	}, []);

	return (
		<div>
			{user && (
				<h1>
					Пользователь: {user.last_name} {user.first_name}
				</h1>
			)}
			<h2> Список друзей:</h2>
			<ul>{getFriendsComponents()}</ul>
		</div>
	);
}

export default Home;
