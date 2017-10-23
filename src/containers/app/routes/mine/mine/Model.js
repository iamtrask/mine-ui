import React from 'react';

const Model = ({ model, queued, buttonFunc }) => (
  <li className="model">
    <div className="content">
      <h5 className="name not-capped">{model.name}</h5>
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
    </div>
    <div className="progress-cta">
      {queued && <div className="progress">{model.timeRemaining}</div>}
      <button
        className={!queued ? 'medium-gray' : 'dark-gray'}
        onClick={() => buttonFunc(model)}
      >
        {!queued ? 'Add to Queue' : 'Pause Training'}
      </button>
    </div>
  </li>
);

export default Model;
