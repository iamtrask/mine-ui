import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

// Action Creators
import { removeNotification } from '../../modules/notifications';

import asyncComponent from './components/async-component';

// UI Components
const Header = asyncComponent(() => import('./components/header'));
const Notifications = asyncComponent(() =>
  import('./components/notifications')
);

// Routes
const Static = asyncComponent(() => import('./routes/static'));
const Mine = asyncComponent(() => import('./routes/mine'));
const NotFound = asyncComponent(() => import('./routes/not-found'));

class App extends Component {
  render() {
    return (
      <div id="app">
        <Notifications
          notifications={this.props.notifications}
          removeFunc={this.props.removeNotification}
        />
        {this.props.isAuthenticated && (
          <Header
            isAuthenticated={this.props.isAuthenticated}
            currentPage={this.props.location.pathname}
          />
        )}
        <div id="content">
          <Switch>
            <Route path="/mine" component={Mine} />
            <Route path="/" component={Static} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  notifications: state.notifications.notifications
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
