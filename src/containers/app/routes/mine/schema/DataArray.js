// @flow
import React from 'react'

import DataTree from './DataTree'
import translator from './translator'
import Key from './types/Key'
import Value from './types/Value'

type Data = {} | string | number
type Props = {
  data: Data[],
  title: string
}

const DataArray = ({data, title}: Props) => (
  <div>
    <Key>{translator(title)}</Key>
    <div className="data-array">
      {data.map((d, i) => {
        if (typeof d === 'object') return <DataTree data={d} index={i} />

        return <Value>{d}</Value>
      })}
    </div>
  </div>
)

export default DataArray
