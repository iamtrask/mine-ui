import React from 'react';

import Key from './types/Key';
import Value from './types/Value';
import Adapter from './types/Adapter';

import translator from './translator';

const renderValue = value => {
  // Value that isn't null or an empty array
  if (value && value.length > 0) {
    // An array
    if (Array.isArray(value)) {
      return value.map(item => {
        if (typeof item === 'object') {
          // Array of objects (adapter relationship)
          return <Adapter {...item} />;
        } else if (typeof item === 'string') {
          // Array of strings
          return <Value>{item}</Value>;
        }

        return null;
      });
    }

    // String
    return <Value>{value}</Value>;
  }

  // Null or empty array
  return <Value notEntered />;
};

const DataValue = ({ title, value }) => (
  <div className="data-value">
    <Key>{translator(title)}</Key>
    {renderValue(value)}
  </div>
);

export default DataValue;
