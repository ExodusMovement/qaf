import React from 'react';

import Box from './Box';

export default ({ boxes, select, move, selected }) =>
  Object.values(boxes).map(box => (
    <Box {...box} {...{ select, move, selected }} key={box.id} />
  ));
