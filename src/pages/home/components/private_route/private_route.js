import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem('authToken') ? (
					<Component {...props} />
				) : (
					<Redirect to={`${process.env.PUBLIC_URL} + /login`} />
				)
			}
		/>
	);
};

export default PrivateRoute;
