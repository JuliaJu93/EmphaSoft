import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Login from './pages/login';
import PrivateRoute from './pages/home/components/private_route';
import Home from './pages/home';

console.log(process.env)

function Main() {
	return (
		<Router>
			<main>
				<Switch>
					<PrivateRoute exact path = {`${process.env.PUBLIC_URL} + /`} component={Home} />
				</Switch>
				<Switch>
					<Route exact path = {`${process.env.PUBLIC_URL} + /login`}>
						<Login />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));
