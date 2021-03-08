import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from 'Core/routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, ...rest }) => (
          <Route render={() => <Component />} {...rest} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
