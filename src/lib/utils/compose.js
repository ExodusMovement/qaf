// @flow

import { createElement } from 'react';

export default components => props =>
  Object.keys(components).reduceRight(
    (children, key) => allProps =>
      createElement(components[key], {}, childProps =>
        children({ ...allProps, [key]: childProps })
      ),
    props.children || props.render
  )();
