import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import client from 'Common/services/queryClient';
import routes from 'Core/routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          {routes.map(({ component: Component, path, ...rest }) => (
            <Route
              render={() => <Component />}
              path={path}
              key={path}
              {...rest}
            />
          ))}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
