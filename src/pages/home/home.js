import React, { useState } from 'react';
import { 
    Redirect,
} from "react-router-dom";

function Home () {
    const [authorization, setAuthorization] = useState(false);
    return (
        <div>
        {!authorization && <Redirect to="/login" />} 
        <h1>Умяр вообще не умеет играть в МК</h1>
        </div>
    );
}

export default Home; 