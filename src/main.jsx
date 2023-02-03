import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Auth0Provider
      domain="dev-alejorios40.us.auth0.com"
      clientId="lZM78nwICNX9gnk5S88RKsV68Ic0qdkH"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>,
)
