import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import RegisterButton from './components/register_button';

function Login() {
	const [isLogged, setIsLogged] = useState(!!localStorage.getItem('authToken'));
	useEffect(() => {
		const token = new URLSearchParams(window.location.hash).get(
			'#access_token'
		);
		if (token) {
			localStorage.setItem('authToken', token);
			setIsLogged(true);
		}
	}, []);

	return (
		<div>
			{isLogged && <Redirect to = '/' />}
			<RegisterButton />
		</div>
	);
}

export default Login;
