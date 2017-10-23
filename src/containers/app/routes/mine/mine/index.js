import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Container, Row, Column, Switch, Page, Heading } from 'omui';

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
              <Heading level={3}>Current Process</Heading>
              <CurrentProcess
                modelQueue={this.props.modelQueue}
                dequeueModel={this.props.dequeueModel}
              />
            </Column>
          </Row>
          <Row>
            <Column sizes={{ small: 12 }}>
              <Heading level={4}>Available Models</Heading>
            </Column>
          </Row>
          <Row>
            <Column sizes={{ small: 12, medium: 7, large: 9 }}>
              <Input
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
              <Switch
                className="auto-enroll"
                label="Auto-enroll"
                checked={this.state.autoEnroll}
                onChange={() =>
                  this.setState({ autoEnroll: !this.state.autoEnroll })}
              />
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
