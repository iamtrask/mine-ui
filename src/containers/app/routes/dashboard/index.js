import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../../components/authenticated-route';

import asyncComponent from '../../components/async-component';

const Home = asyncComponent(() => import('./home'));
const About = asyncComponent(() => import('./about'));

const NotFound = asyncComponent(() => import('../not-found'));

export default () => (
  <Switch>
    <AuthenticatedRoute path="/dashboard" exact component={Home} />
    <AuthenticatedRoute path="/dashboard/about" component={About} />

    <Route component={NotFound} />
  </Switch>
);
