import React from 'react';
import { Redirect} from "react-router-dom";

import RegisterButton from './components/register_button';

function Login () {
    return (
        <div>
            {localStorage.getItem("authToken") && <Redirect to="/" />} 
            <RegisterButton />
        </div>
    );
}

export default Login; 