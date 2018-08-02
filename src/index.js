import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes';

import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Grid padded centered doubling columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Routes />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
registerServiceWorker();
