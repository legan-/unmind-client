import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import CheckIn from '../containers/CheckIn';

const routes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/check-in',
    title: 'Check In',
    component: CheckIn,
  },
];

export default () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact
          render={props => <route.component title={route.title} history={route} />}
        />
      ))}
    </Switch>
  </BrowserRouter>
);
