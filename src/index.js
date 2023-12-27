import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { client } from "./ApolloClient/client";
import { Provider } from "react-redux";
import { ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';
import configureStore from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
global.reduxStore = store;


root.render(
  <>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-uy5nxb4g3gmip2b7.us.auth0.com"
          clientId="pnN777ldp5xA9kwK4KcRgZ3GPc4CfE5x"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}>
          <App />
        </Auth0Provider>
      </Provider>
    </ApolloProvider>
  </>
);

