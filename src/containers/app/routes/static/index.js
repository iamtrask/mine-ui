import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../../components/authenticated-route';
import UnauthenticatedRoute from '../../components/unauthenticated-route';

import asyncComponent from '../../components/async-component';

const Login = asyncComponent(() => import('./login'));
const Logout = asyncComponent(() => import('./logout'));

const NotFound = asyncComponent(() => import('../not-found'));

export default () => (
  <Switch>
    <UnauthenticatedRoute exact path="/" component={Login} />
    <AuthenticatedRoute exact path="/logout" component={Logout} />

    <Route component={NotFound} />
  </Switch>
);
