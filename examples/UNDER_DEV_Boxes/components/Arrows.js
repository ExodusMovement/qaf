import React from 'react';

import Arrow from './Arrow';

export default ({ arrows }) => (
  <svg>{arrows.map(arrow => <Arrow {...arrow} key={arrow.id} />)}</svg>
);
