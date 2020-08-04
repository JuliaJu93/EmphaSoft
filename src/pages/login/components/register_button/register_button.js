import React, {useEffect} from 'react';

function RegisterButton () {
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