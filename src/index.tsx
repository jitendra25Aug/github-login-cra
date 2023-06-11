import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from './store';
import GithubProvider from './context/github_context';
import { FilterProvider } from './context/filter_context';

const domain: any = process.env.REACT_APP_DOMAIN;
const clientId: any = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}
    cacheLocation="localstorage">
    <Provider store={store}>
      <GithubProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </GithubProvider>
    </Provider>
  </Auth0Provider>
);

