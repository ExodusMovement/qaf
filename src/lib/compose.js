import React from 'react';

const el = (Component, ...args) =>
  (typeof Component.type === 'function'
    ? React.cloneElement
    : React.createElement)(Component, ...args);

export default components => props => {
  const reducer = (memo, key) => allProps =>
    el(components[key], {
      children: childProps => memo({ ...allProps, [key]: childProps })
    });

  return Object.keys(components).reduceRight(
    reducer,
    props.children || props.render
  )();
};
