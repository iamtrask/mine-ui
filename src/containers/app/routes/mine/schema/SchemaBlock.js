// @flow
import React from 'react';

import translator from './translator';

import DataTree from './DataTree';

import { Heading } from 'openmined-ui';

type Props = {
  data: {},
  index: number
};
const SchemaBlock = ({ data, index }: Props) => (
  <div className="schema-block">
    <Heading level={3}>{translator(index)}</Heading>
    <DataTree data={data} index={index} />
  </div>
);

export default SchemaBlock;
