import React from 'react';

export const nestify = (components, children, index = 0) =>
  React.createElement(
    components[index],
    {},
    index === components.length - 1
      ? children
      : nestify(components, children, index + 1)
  );

export const compose = (...components) => ({ children, render }) =>
  components.reduceRight(
    (Composed, Component) => (...renderProps) =>
      React.createElement(Component, {}, renderProp =>
        Composed(...[...renderProps, renderProp])
      ),
    children || render
  )();
