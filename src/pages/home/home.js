import React, { useState, useEffect } from 'react';
import { callAPI } from './components/call_API/call_API';

function Home() {
	const [user, setUser] = useState(null);
	const [friends, setFriends] = useState([]);
	const token = localStorage.getItem('authToken');

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
		callAPI(`https://api.vk.com/method/users.get?access_token=${token}&v=5.122`)
			.then((data) => {
				setUser(data.response[0]);
			})
			.catch((error) =>
				alert('Ошибка: не удалось загрузить данные пользователя', error)
			);

		callAPI(
			`https://api.vk.com/method/friends.get?count=5&fields=nickname&fields=photo_100&access_token=${token}&v=5.122`
		)
			.then((data) => {
				setFriends(data.response.items);
			})
			.catch((error) =>
				alert('Ошибка: не удалось загрузить список друзей', error)
			);
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
