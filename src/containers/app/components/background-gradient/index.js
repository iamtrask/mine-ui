import React from 'react';

import './background-gradient.css';

const BackgroundGradient = props => (
  <div
    className={
      props.animated ? 'background-gradient animated' : 'background-gradient'
    }
  />
);

export default BackgroundGradient;
