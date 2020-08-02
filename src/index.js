import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/login';

function Main() {
  return (
  <div>
    <Login />
  </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);