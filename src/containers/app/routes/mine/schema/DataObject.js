import React from 'react';

import Adapter from './types/Adapter';

import DataValue from './DataValue';

const DataObject = ({ data }) => (
  <div className="data-object">
    {!data.adapter &&
      Object.keys(data).map(item => {
        if (typeof data[item] === 'object' && data[item] !== null) {
          // Object inside object
          return <DataObject data={data[item]} />;
        } else {
          // Just a value
          return <DataValue title={item} value={data[item]} />;
        }
      })}
    {data.adapter && <Adapter {...data} />}
  </div>
);

export default DataObject;
