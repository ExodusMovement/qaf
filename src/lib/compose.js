import { createElement } from 'react';

export default components => props => {
  const reducer = (memo, key) => allProps =>
    createElement(components[key], {}, childProps =>
      memo({ ...allProps, [key]: childProps })
    );

  return Object.keys(components).reduceRight(
    reducer,
    props.children || props.render
  )();
};
