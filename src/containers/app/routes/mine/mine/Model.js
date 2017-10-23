import React, { Component } from 'react';
import moment from 'moment';

const Title = model => <h5 className="name not-capped">{model.name}</h5>;

const Meta = model => (
  <div className="meta">
    {model.private && <i className="fa fa-lock private" />}
    <span className="author">{model.author}</span>
    <span className="separator"> - </span>
    <span className="bounty">
      {`${model.bounty
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        .slice(0, -3)} bounty`}
    </span>
  </div>
);

const CTAButton = ({ model, queued, buttonFunc }) => (
  <button
    className={!queued ? 'medium-gray' : 'dark-gray'}
    onClick={() => buttonFunc(model)}
  >
    {!queued ? 'Add to Queue' : 'Pause Training'}
  </button>
);

// TODO: We need to move this to the component library (OMUI)
const Progress = ({ percent }) => (
  <div className="progress">
    <span className="marker" style={{ width: percent + '%' }} />
  </div>
);

class TrainingStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waited: 0,
      totalWait: 0
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);

    this.setState({
      totalWait: moment
        .duration(moment(this.props.timeRemaining).diff(moment()))
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

  getPercentRemaining() {
    return (this.state.waited / this.state.totalWait * 100).toFixed(2);
  }

  getTimeRemaining() {
    let remaining = moment.duration(
        this.state.totalWait - this.state.waited,
        'seconds'
      ),
      hours = remaining.hours() > 0 ? remaining.hours() + ' hours' : '',
      minutes = remaining.minutes() > 0 ? remaining.minutes() + ' minutes' : '',
      seconds = remaining.seconds() > 0 ? remaining.seconds() + ' seconds' : '',
      timeArray = [];

    if (hours !== '') timeArray.push(hours);
    if (minutes !== '') timeArray.push(minutes);
    if (seconds !== '') timeArray.push(seconds);

    return `About ${timeArray.join(', ')} remaining`;
  }

  render() {
    return (
      <div className="training-status">
        <Progress percent={this.getPercentRemaining()} />
        <span className="time-remaining">{this.getTimeRemaining()}</span>
      </div>
    );
  }
}

const Model = ({ model, queued, buttonFunc }) => (
  <li className="model">
    <div className="content">
      <Title {...model} />
      <Meta {...model} />
    </div>
    <div className="progress-cta">
      {queued && <TrainingStatus {...model} />}
      {<CTAButton model={model} queued={queued} buttonFunc={buttonFunc} />}
    </div>
  </li>
);

export default Model;
