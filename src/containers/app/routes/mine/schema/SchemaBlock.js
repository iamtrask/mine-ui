import React from 'react'

import translator from './translator'

import DataTree from './DataTree'

import {Heading} from 'openmined-ui'

const SchemaBlock = ({block, index}) => (
  <div className="schema-block">
    <Heading level={3}>{translator(index)}</Heading>
    <DataTree block={block} />
  </div>
)

export default SchemaBlock
