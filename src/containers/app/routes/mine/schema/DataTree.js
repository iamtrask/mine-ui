// @flow
import React from 'react';

import DataArray from './DataArray';
import DataObject from './DataObject';
import DataValue from './DataValue';

const getComponentType = function(blockData) {
  switch (true) {
    case !blockData: {
      return DataValue;
    }
    case Array.isArray(blockData): {
      return DataArray;
    }
    case typeof blockData === 'object': {
      return DataObject;
    }
    default: {
      return DataValue;
    }
  }
};

type Props = {
  data: {},
  index: number
};

const DataTree = ({ data, index }: Props) => (
  <div className="data-tree">
    {Object.keys(data).map((key, iterator) => {
      const blockData = data[key];

      const ComponentType = getComponentType(blockData);
      return (
        <ComponentType
          key={`schema-${index}-${iterator}`}
          data={blockData}
          title={key}
        />
      );
    })}
  </div>
);

export default DataTree;
