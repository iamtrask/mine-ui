import React from 'react';

import DataValue from './DataValue';

const DataObject = ({ data }) => (
  <div className="data-object">
    {Object.keys(data).map(item => {
      return <DataValue title={item} value={data[item]} />;
    })}
  </div>
);

export default DataObject;
