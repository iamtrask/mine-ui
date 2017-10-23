import React from 'react';
import Model from './Model';

const AvailableModels = ({ models, enqueueModel }) => (
  <div className="models">
    {models.length > 0 && (
      <ul>
        {models.map((model, index) => {
          return (
            <Model
              key={`model-${index}`}
              buttonFunc={() => enqueueModel(model)}
              model={model}
            />
          );
        })}
      </ul>
    )}
    {models.length <= 0 && (
      <p className="null-set">
        There are no models fitting that search criteria.
      </p>
    )}
  </div>
);

export default AvailableModels;
