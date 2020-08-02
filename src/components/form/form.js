import React, { useState } from 'react';

function Form () {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form id="form">
            <input type="text" id="login" onChange = {(e) => setLogin(e.target.value)}/>
            <input type="password" id="password" onChange = {(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Авторизоваться" onClick = {() => console.log(login, password)} />
        </form>
    );
}

export default Form; 