import React from 'react';

const nestify = (components, children, index = 0) =>
  React.createElement(
    components[index],
    {},
    index === components.length - 1
      ? children
      : nestify(components, children, index + 1)
  );

export default nestify;
