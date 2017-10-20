import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../../components/page';

import { addNotification } from '../../../../../modules/notification';

class Mine extends Component {
  render() {
    return (
      <Page id="mine" className="header-margin-bump" title="My Mine" noCrawl>
        <h1>My Mine</h1>
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

export default connect(null, mapDispatchToProps)(Mine);
