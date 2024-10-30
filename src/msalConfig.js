// src/msalConfig.js
const msalConfig = {
    auth: {
        clientId: process.env.REACT_APP_MSAL_CLIENT_ID, // Your client ID
        authority: "https://login.microsoftonline.com/common", // Your tenant ID
        redirectUri: window.location.origin, // Your redirect URI
    },
};

export default msalConfig;
