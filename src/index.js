import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css';

import Login from './pages/login';
import Home from './pages/home';

function Main() {
  return (
    <Router>
    <main>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
    </main>
  </Router>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);