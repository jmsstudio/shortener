import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
import config from 'config';

const apolloClient = new ApolloClient({
  link: new HttpLink(
    `https://api.graph.cool/simple/v1/${config.graphcoolServiceId}`
  ),
  cache: new InMemoryCache()
});

const withApolloProvider = comp => (
  <ApolloProvider client={apolloClient}>{comp}</ApolloProvider>
);

const root = document.getElementById('root');

ReactDOM.render(withApolloProvider(<App />), root);
