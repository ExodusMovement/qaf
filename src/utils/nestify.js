// @flow

import { createElement } from 'react';

const nestify = (components, children, index = 0) =>
  createElement(
    components[index],
    {},
    index === components.length - 1
      ? children
      : nestify(components, children, index + 1)
  );

export default nestify;
