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
    useEffect(() => {
        const isAuthenticated = accounts.length > 0;
        if (isAuthenticated) {
            console.log("IsAuthenticated", accounts[0])
            navigate('/dashboard');
        }
        else {
            console.log("its not Authenticated", accounts[0])
            
                const isAuthenticated = accounts.length > 0;
        
                if (!isAuthenticated) {
                    const silentRequest = {
                        scopes: ["User.Read"],
                        // loginHint: "user@contoso.com"
                    };
                    console.log("No account fount", accounts);
                    instance.ssoSilent(silentRequest).then(res => {
                        console.log("Using SSO Login", res);
                    }).catch(err =>
                        console.log("Error = ", err))
        
                } else {
                    console.log("AUthenticated account = ", accounts)
                }
            
        }
    }, [])
   

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
