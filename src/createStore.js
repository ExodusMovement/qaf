// @flow

import React from 'react';

// takes a store instant, returns its props (computed values and actions)
export const getProps = obj => {
  // computed values are only present in the prototype
  const desc = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(obj));

  // iterate over each prop and check if it's a getter
  const computed = Object.keys(desc).filter(
    key => desc[key] && typeof desc[key].get === 'function'
  );

  // object keys are sufficient to list all actions (arrow functions only)
  // while blocking methods we don't don't typically want to pass to every subscribed component
  // e.g. `componentDidMount`, even when it's defined in the store it will not be passed
  // regular functions were omitted since they require additional computation and may need binding
  const actions = Object.keys(obj).filter(
    key => typeof obj[key] === 'function'
  );

  // reconstruct combined props array as a single object
  return [...computed, ...actions].reduce(
    (props, prop) => ({ ...props, [prop]: obj[prop] }),
    {}
  );
};

// creates a store
export const createStore = () => {
  // ensures a unique context (each store has its own context)
  const StoreContext = React.createContext();

  return class Store extends React.PureComponent {
    // by defining the consumer as a static prop
    // and rendering the provider as a wrapper of the children, the store is now fully portable
    // <Store /> renders the context provider
    // <Store.Consumer /> renders the context consumer
    static Consumer = StoreContext.Consumer;

    render() {
      // notice we are spreading the state here
      return (
        <StoreContext.Provider value={{ ...getProps(this), ...this.state }}>
          {this.props.children}
        </StoreContext.Provider>
      );
    }
  };
};
