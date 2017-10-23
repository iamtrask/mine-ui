import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../../components/page';
import { Container, Row, Column } from '../../../components/grid';

import Fuse from 'fuse.js';

import { enqueueModel, dequeueModel } from '../../../../../modules/models';

import AvailableModels from './AvailableModels';
import CurrentProcess from './CurrentProcess';

import './mine.css';

const options = {
  shouldSort: true,
  minMatchCharLength: 1,
  keys: ['name', 'author']
};

class Mine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      autoEnroll: false
    };
  }

  getAvailableModels(models, search) {
    if (search !== '') {
      return new Fuse(this.props.models, options).search(this.state.search);
    }

    return models;
  }

  render() {
    return (
      <Page
        id="mine"
        className="header-margin-bump page-pad"
        title="My Mine"
        noCrawl
      >
        <Container>
          <Row>
            <Column sizes={{ small: 12 }}>
              <h3>Current Process</h3>
              <CurrentProcess
                modelQueue={this.props.modelQueue}
                dequeueModel={this.props.dequeueModel}
              />
            </Column>
          </Row>
          <Row>
            <Column sizes={{ small: 12 }}>
              <h4>Available Models</h4>
            </Column>
          </Row>
          <Row>
            <Column sizes={{ small: 12, medium: 7, large: 9 }}>
              <input
                type="search"
                value={this.state.search}
                className="model-search"
                placeholder="Search for models..."
                onChange={e => {
                  this.setState({ search: e.target.value });
                }}
              />
            </Column>
            <Column sizes={{ small: 12, medium: 5, large: 3 }}>
              <div className="switch-container auto-enroll">
                <p className="switch-label">Auto-enroll</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={this.state.autoEnroll}
                    onChange={() =>
                      this.setState({ autoEnroll: !this.state.autoEnroll })}
                  />
                  <span className="slider" />
                </label>
              </div>
            </Column>
          </Row>
          <Row>
            <Column sizes={{ small: 12 }}>
              <AvailableModels
                models={this.getAvailableModels(
                  this.props.models,
                  this.state.search
                )}
                enqueueModel={this.props.enqueueModel}
              />
            </Column>
          </Row>
        </Container>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  modelQueue: state.models.modelQueue,
  models: state.models.models
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ enqueueModel, dequeueModel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mine);
