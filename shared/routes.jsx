import React     from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute name="landingPage" component={Dashboard} />
    <Route name="login" component={Login} path="login" />
  </Route>
);
