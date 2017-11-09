// @flow
import React from 'react'

import DataTree from './DataTree'
import translator from './translator'
import Key from './types/Key'

type Props = {
  data: {},
  title: string
}
const DataObject = ({data, title}: Props) => (
  <div>
    <Key>{translator(title)}</Key>
    <div className="data-object">
      <DataTree data={data} index={0} />
    </div>
  </div>
)

export default DataObject
