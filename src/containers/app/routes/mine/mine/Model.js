import React from 'react';

const Model = ({ model, queued, buttonFunc }) => (
  <li className="model">
    {model.name}
    {queued && model.timeRemaining}
    <button onClick={() => buttonFunc(model)}>
      {!queued ? 'Add to Queue' : 'Pause Training'}
    </button>
  </li>
);

export default Model;
