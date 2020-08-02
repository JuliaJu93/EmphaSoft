import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './pages/login';

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