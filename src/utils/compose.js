// @flow

import { createElement } from 'react';

export default (...components) => props =>
  components.reduceRight(
    (children, Component) => (...allProps) =>
      createElement(Component, {}, childProps =>
        children(...allProps.concat(childProps))
      ),
    props.children || props.render
  )();
