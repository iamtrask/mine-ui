import React from 'react';
import Model from './Model';

const CurrentProcess = ({ modelQueue, dequeueModel }) => (
  <div className="model-queue">
    {modelQueue.length > 0 && (
      <ul>
        {modelQueue.map((model, index) => {
          return (
            <Model
              key={`model-${index}`}
              buttonFunc={() => dequeueModel(model)}
              model={model}
              queued
            />
          );
        })}
      </ul>
    )}
    {modelQueue.length <= 0 && (
      <p className="null-set">There are no models currently being trained.</p>
    )}
  </div>
);

export default CurrentProcess;
