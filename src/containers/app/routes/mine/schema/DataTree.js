import React from 'react'

import DataArray from './DataArray'
import DataObject from './DataObject'
import DataValue from './DataValue'

const DataTree = ({block, index}) => (
  <div className="data-tree">
    {Object.keys(block).map((data, iterator) => {
      const blockData = block[data]

      if (!blockData) return null

      if (Array.isArray(blockData)) {
        return (
          <DataArray
            key={`schema-${index}-${iterator}`}
            data={blockData}
            title={data}
          />
        )
      }

      if (typeof blockData === 'object') {
        return (
          <DataObject key={`schema-${index}-${iterator}`} data={blockData} />
        )
      }

      return (
        <DataValue
          key={`schema-${index}-${iterator}`}
          title={data}
          value={blockData}
        />
      )
    })}
  </div>
)

export default DataTree
