import React, { Component } from 'react';
import moment from 'moment';
import { Progress } from 'openmined-ui';

import modelImage from './assets/model.svg';

const Title = ({ name }) => <h5 className="name not-capped">{name}</h5>;

const Meta = ({ isPrivate, author, bounty }) => (
  <div className="meta">
    {isPrivate && <i className="fa fa-lock private" />}
    <span className="author">{author}</span>
    <span className="separator"> - </span>
    <span className="bounty">
      {`${bounty
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        .slice(0, -3)} bounty`}
    </span>
  </div>
);

const Requests = ({ requests }) => (
  <ul>
    {Object.keys(requests).map((key, index) => {
      if (typeof requests[key] === 'string') {
        return (
          <li key={`request-${index}`}>
            {key} - {requests[key]}
          </li>
        );
      } else {
        return (
          <li key={`request-${index}`}>
            {key}
            <ul>
              {Object.keys(requests[key]).map((nextKey, nextIndex) => {
                return (
                  <li key={`request-${index}-${nextIndex}`}>
                    {nextKey} - {requests[key][nextKey]}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    })}
  </ul>
);

const CTAButton = ({ model, isTraining, buttonFunc }) => (
  <button
    className={isTraining ? 'dark-gray' : 'medium-gray'}
    onClick={() => buttonFunc(model)}
  >
    {isTraining ? 'Pause Training' : 'Add to Queue'}
  </button>
);

const TrainingStatus = ({ getTime, getPercent }) => (
  <div className="training-status">
    <Progress percent={getPercent()} />
    <span className="time-remaining">{getTime()}</span>
  </div>
);

class Model extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waited: 0,
      totalWait: 0,
      isShowingRequests: false
    };

    this.tick = this.tick.bind(this);
    this.getPercentRemaining = this.getPercentRemaining.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);

    this.setState({
      totalWait: moment
        .duration(moment(this.props.model.timeRemaining).diff(moment()))
        .asSeconds()
        .toFixed(0)
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ waited: this.state.waited + 1 });

    if (this.state.waited >= this.state.totalWait) {
      clearInterval(this.interval);
    }
  }

  getSecondsRemaining() {
    return moment.duration(this.state.totalWait - this.state.waited, 'seconds');
  }

  getPercentRemaining() {
    return (this.state.waited / this.state.totalWait * 100).toFixed(0);
  }

  getTimeRemaining() {
    let remaining = this.getSecondsRemaining();

    if (remaining.asSeconds()) {
      const determineTense = (num, word) => {
        if (num === 1) return `${num} ${word}`;
        else if (num > 1) return `${num} ${word}s`;

        return '';
      };

      let hours = determineTense(remaining.hours(), 'hour'),
        minutes = determineTense(remaining.minutes(), 'minute'),
        seconds = determineTense(remaining.seconds(), 'second'),
        timeArray = [];

      if (hours !== '') timeArray.push(hours);
      if (minutes !== '') timeArray.push(minutes);
      if (seconds !== '') timeArray.push(seconds);

      return `About ${timeArray.join(', ')} remaining`;
    }

    return 'Training complete.';
  }

  shouldShowButton() {
    return (
      (this.props.isTraining && this.getSecondsRemaining() > 0) ||
      !this.props.isTraining
    );
  }

  render() {
    const { model, isTraining, buttonFunc } = this.props;

    return (
      <li className="model">
        <div className="content">
          {isTraining && (
            <img
              src={modelImage}
              alt={model.name}
              className={
                this.getSecondsRemaining() > 0 ? (
                  'model-image training'
                ) : (
                  'model-image'
                )
              }
            />
          )}
          <div
            className="model-data"
            onClick={() =>
              this.setState({
                isShowingRequests: !this.state.isShowingRequests
              })}
          >
            <Title {...model} />
            <Meta {...model} />
            {this.state.isShowingRequests && <Requests {...model} />}
          </div>
        </div>
        <div className="progress-cta">
          {isTraining && (
            <TrainingStatus
              getTime={this.getTimeRemaining}
              getPercent={this.getPercentRemaining}
            />
          )}
          {this.shouldShowButton() && (
            <CTAButton
              model={model}
              isTraining={isTraining}
              buttonFunc={buttonFunc}
            />
          )}
        </div>
      </li>
    );
  }
}

export default Model;
