// @flow
import React from 'react';

import Key from './types/Key';
import Value from './types/Value';

import translator from './translator';

type Props = {
  data: string,
  title: string
};

const DataValue = ({ title, data }: Props) => (
  <div className="data-value">
    <Key>{translator(title)}</Key>

    <Value>{data}</Value>
  </div>
);

export default DataValue;
