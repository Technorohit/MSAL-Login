import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import App from './App';
import msalConfig from './msalConfig';

const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
msalInstance.initialize().then(()=>{
  root.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
          <App />
      </MsalProvider>
      </React.StrictMode>
  );
}).catch(()=>{
  console.log("Msal not initialized")
})
