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
          domain="dev-1wnjm8udx5ki0n1p.us.auth0.com"
          clientId="1UmKCbxRx1PAT5si0kNjIm6Thu7FQPfx"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}>
          <App />
        </Auth0Provider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
)