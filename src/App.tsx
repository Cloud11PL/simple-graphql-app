import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';


import devices from 'Core/styles/theme/devices';
import client from 'Common/services/queryClient';
import routes from 'Core/routes';
import store from 'Core/store';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={{
          devices
        }}>
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
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
