import React, { useState, useEffect } from 'react';

function RegisterButton () {
    const [token, setCode] = useState('');
    // const makeRequest = () => {
    //     fetch('https://oauth.vk.com/authorize?', {
    //         mode: 'no-cors',
    //         client_id: '7557493',
    //         display: 'popup',
    //         redirect_uri: 'http://localhost:3000/login',
    //         type: 'token'
    //         })
    // .then((response) => {
    // return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // });
    // }
    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get('token');
        if (token !== null) {
            setCode(token);
        }
    });
    function getToken() {
        let url = 'https://oauth.vk.com/authorize?';
        url += 'client_id=7557493&';
        url += 'display=page&';
        url += 'redirect_uri=http://localhost:3000/login&';
        url += 'response_type=token&';
        url += 'scope=friends&'
        window.location.href = url;
    } 
    
    return (
        <div>
        <button onClick = {getToken}> Авторизоваться </button>
        </div>
    );
}

export default RegisterButton; 