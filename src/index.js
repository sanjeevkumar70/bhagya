import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </>
);

