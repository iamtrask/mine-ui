import React from 'react';

const Adapter = adapter => (
  <div className="value adapter">
    {adapter.type}
    {adapter.value}
  </div>
);

export default Adapter;
