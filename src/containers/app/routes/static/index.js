import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../../components/authenticated-route';
import UnauthenticatedRoute from '../../components/unauthenticated-route';

import Login from './login';
import Logout from './logout';

import NotFound from '../not-found';

export default () => (
  <Switch>
    <UnauthenticatedRoute exact path="/" component={Login} />
    <AuthenticatedRoute exact path="/logout" component={Logout} />

    <Route component={NotFound} />
  </Switch>
);
