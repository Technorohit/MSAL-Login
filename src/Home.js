// src/Home.js
import React, { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const { instance, accounts } = useMsal();
    const navigate = useNavigate();

    const login = () => {
        instance.loginPopup().then(res => console.log(res))
            .catch((error) => console.log(error));
    };
    useEffect(()=>{
        const isAuthenticated = accounts.length > 0;
        if(isAuthenticated){
            navigate('/dashboard'); 
        }
    })

    return (
        <div className="home-container">
            <div className="login-box">
                <h1>Welcome</h1>
                <p>Please log in to continue</p>
                <button className="login-button" onClick={login}>Login</button>
            </div>
        </div>
    );
};

export default Home;
