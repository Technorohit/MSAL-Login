// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
    const {accounts, instance } = useMsal();

    const isAuthenticated = accounts.length > 0;
    if(!isAuthenticated){
        console.log("No account fount", accounts);
        instance.ssoSilent().then(res=>{
            console.log("Using SSO Login", res);
        }).catch(err=>
            console.log("Error = ",err))
        
    }else{
        console.log("AUthenticated account = ", accounts)
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={
                        isAuthenticated ? (
                            <Dashboard />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
