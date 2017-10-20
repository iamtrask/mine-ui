import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../../components/authenticated-route';

import Home from './home';
import About from './about';

import NotFound from '../not-found';

export default () => (
  <Switch>
    <AuthenticatedRoute path="/dashboard" exact component={Home} />
    <AuthenticatedRoute path="/dashboard/about" component={About} />

    <Route component={NotFound} />
  </Switch>
);
