// @flow

import React from 'react';

import { StoresContext } from './Provider';

export const compose = (...components) => props =>
  components.reduceRight(
    (children, Component) => (...allProps) =>
      React.createElement(Component, {}, childProps =>
        children(...allProps.concat(childProps))
      ),
    props.children || props.render
  )();

export const Subscribe = ({ children, ...props }) => (
  <StoresContext.Consumer>
    {stores => {
      const injected = Object.keys(props);

      const consumers = Object.keys(stores)
        .filter(key => injected.includes(key))
        .map(key => stores[key].Consumer);

      const Composed = compose(...consumers);
      Composed.displayName = `subscribe(${injected.join(', ')})`;

      return (
        <Composed render={(...injectedStores) => children(...injectedStores)} />
      );
    }}
  </StoresContext.Consumer>
);

export const subscribe = (...injected) => Component =>
  React.forwardRef((props, ref) => (
    <Subscribe
      {...injected.reduce((obj, store) => ({ ...obj, [store]: true }), {})}>
      {(...injectedStores) => (
        <Component
          {...props}
          {...{ ref }}
          {...injectedStores.reduce(
            (obj, store, index) => ({
              ...obj,
              [injected[index]]: store
            }),
            {}
          )}
        />
      )}
    </Subscribe>
  ));
