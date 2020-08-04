import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import RegisterButton from './components/register_button';

function Login() {
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const token = new URLSearchParams(window.location.hash).get(
			'#access_token'
		);
		if (token) {
			localStorage.setItem('authToken', token);
			setLogin(true);
		}
	});

	return (
		<div>
			{localStorage.getItem('authToken') && <Redirect to="/" />}
			<RegisterButton />
		</div>
	);
}

export default Login;
