import React from 'react';

const el = (Component, ...args) =>
  (typeof Component.type === 'function'
    ? React.cloneElement
    : React.createElement)(Component, ...args);

const reducer = (memo, Component) => (...props) =>
  el(Component, { children: childProps => memo(...props.concat(childProps)) });

export default (...components) => props =>
  components.reduceRight(reducer, props.children || props.render)();
