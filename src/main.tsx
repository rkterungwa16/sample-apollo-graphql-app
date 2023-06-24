import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root';
import './libraries/server'; // This does the magic

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/graphql',
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>
);
