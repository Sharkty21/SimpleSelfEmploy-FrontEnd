import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import QueryProvider from "./lib/tanstack-query/QueryProvider.tsx"
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENTID}
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: import.meta.env.VITE_API_BASE_URL,
          }}>
          <App />
        </Auth0Provider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
)