// @flow
import React from 'react';

import DataObject from './DataObject';
import translator from './translator';
import Key from './types/Key';
import Value from './types/Value';

type Data = {} | string | number;
type Props = {
  data: Data[],
  title: string
};

const DataArray = ({ data, title }: Props) => (
  <div>
    <Key>{translator(title)}</Key>
    {data.length ? (
      <div className="data-array">
        {data.map((d, i) => {
          if (typeof d === 'object') return <DataObject data={d} index={i} />;

          return <Value>{d}</Value>;
        })}
      </div>
    ) : (
      <Value />
    )}
  </div>
);

export default DataArray;
