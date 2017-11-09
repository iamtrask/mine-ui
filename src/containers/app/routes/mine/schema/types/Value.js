// @flow
import React, { type Node } from 'react';

type Props = {
  children: Node
};
const Value = ({ children }: Props) => (
  <div className="value">
    {children || <span className="not-entered">Not Entered</span>}
  </div>
);

export default Value;
