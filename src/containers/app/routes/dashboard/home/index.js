import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../../components/page';

import { addNotification } from '../../../../../modules/notification';

class Home extends Component {
  render() {
    return (
      <Page
        id="dashboard"
        className="header-margin-bump"
        title="Dashboard"
        noCrawl
      >
        <h1>Dashboard</h1>
        <button
          onClick={() =>
            this.props.addNotification({ text: 'Welcome to OpenMined!' })}
        >
          Click me!
        </button>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch);

export default connect(null, mapDispatchToProps)(Home);
