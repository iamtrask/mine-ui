import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../../components/authenticated-route';

import asyncComponent from '../../components/async-component';

const Mine = asyncComponent(() => import('./mine'));
const Schema = asyncComponent(() => import('./schema'));
const Adapters = asyncComponent(() => import('./adapters'));
const Bounties = asyncComponent(() => import('./bounties'));
const Settings = asyncComponent(() => import('./settings'));

const NotFound = asyncComponent(() => import('../not-found'));

export default () => (
  <Switch>
    <AuthenticatedRoute path="/mine" exact component={Mine} />
    <AuthenticatedRoute path="/mine/schema" component={Schema} />
    <AuthenticatedRoute path="/mine/adapters" component={Adapters} />
    <AuthenticatedRoute path="/mine/bounties" component={Bounties} />
    <AuthenticatedRoute path="/mine/settings" component={Settings} />

    <Route component={NotFound} />
  </Switch>
);
