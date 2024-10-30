// src/Home.js
import React, { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const { instance, accounts } = useMsal();
    const navigate = useNavigate();

    const login = () => {
        instance.loginPopup().then(res => console.log("Popup login response:", res))
            .catch(error => console.log("Popup login error:", error));
    };

    useEffect(() => {
        const isAuthenticated = accounts.length > 0;

        if (isAuthenticated) {
            console.log("Authenticated user:", accounts[0]);
            navigate('/dashboard');
        } else {
            console.log("No authenticated user found.");

            const silentRequest = {
                scopes: ["User.Read"],
                // loginHint: "user@contoso.com" // Optional: set loginHint to bypass account selection
            };

            instance.ssoSilent(silentRequest)
                .then(response => {
                    console.log("Silent SSO response:", response);
                    navigate('/dashboard'); // Redirect on successful silent SSO
                })
                .catch(error => {
                    console.log("Silent SSO error:", error);
                    // Optionally trigger a loginPopup here as a fallback
                });
        }
    }, [accounts, instance, navigate]); // Include dependencies

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
