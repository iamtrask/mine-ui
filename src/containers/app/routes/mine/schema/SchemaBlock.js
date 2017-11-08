import React from 'react';

import translator from './translator';

import DataArray from './DataArray';
import DataObject from './DataObject';
import DataValue from './DataValue';

import { Heading } from 'openmined-ui';

const SchemaBlock = ({ block, index }) => (
  <div className="schema-block">
    <Heading level={3}>{translator(index)}</Heading>
    {Object.keys(block).map((data, iterator) => {
      const blockData = block[data];

      // Is data an object?
      if (typeof blockData === 'object') {
        if (Array.isArray(blockData)) {
          // If so, is it an array?
          return (
            <DataArray
              key={`schema-${index}-${iterator}`}
              data={blockData}
              title={data}
            />
          );
        } else if (blockData === null) {
          // If not, does it have a value at all?
          return (
            <DataValue
              key={`schema-${index}-${iterator}`}
              title={data}
              value={blockData}
            />
          );
        } else {
          // If so, it's just an object
          return (
            <DataObject key={`schema-${index}-${iterator}`} data={blockData} />
          );
        }
      } else {
        // Data is just a string
        return (
          <DataValue
            key={`schema-${index}-${iterator}`}
            title={data}
            value={blockData}
          />
        );
      }
    })}
  </div>
);

export default SchemaBlock;
