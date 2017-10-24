import React from 'react';
import Model from './Model';

const CurrentProcess = ({ currentModels, dequeueModel }) => (
  <div className="model-queue">
    {currentModels.length > 0 && (
      <ul>
        {currentModels.map((model, index) => {
          return (
            <Model
              key={`model-${index}`}
              buttonFunc={() => dequeueModel(model)}
              model={model}
              isTraining
            />
          );
        })}
      </ul>
    )}
    {currentModels.length <= 0 && (
      <p className="null-set">There are no models currently being trained.</p>
    )}
  </div>
);

export default CurrentProcess;
