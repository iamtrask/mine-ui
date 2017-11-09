import React from 'react';

const Value = ({ notEntered, children }) => (
  <div className={'value ' + (notEntered ? 'not-entered' : 'entered')}>
    {children || <span>Not Entered</span>}
  </div>
);

export default Value;
