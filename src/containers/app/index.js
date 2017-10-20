import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

// Action Creators
import { removeNotification } from '../../modules/notification';

// UI Components
import Header from './components/header';
import Notifications from './components/notifications';

// Routes
import Static from './routes/static';
import Dashboard from './routes/dashboard';
import NotFound from './routes/not-found';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Notifications
          notifications={this.props.notifications}
          removeFunc={this.props.removeNotification}
        />
        <Header
          isAuthenticated={this.props.isAuthenticated}
          currentPage={this.props.location.pathname}
        />
        <div id="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
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
  notifications: state.notification.notifications
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
