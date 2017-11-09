// @flow
import React, {type Node} from 'react'

type Props = {
  children: Node
}
const Key = ({children}: Props) => <div className="key">{children}</div>

export default Key
