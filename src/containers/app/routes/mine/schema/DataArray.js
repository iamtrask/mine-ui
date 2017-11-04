import React from 'react';

import DataValue from './DataValue';

const DataArray = ({ data, title }) => (
  <div className="data-array">
    <DataValue title={title} value={data} />
  </div>
);

export default DataArray;
