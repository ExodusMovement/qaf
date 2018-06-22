// @flow

import React from 'react';

// creates a store
const createStore = () => {
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
        <StoreContext.Provider value={this.state}>
          {this.props.children}
        </StoreContext.Provider>
      );
    }
  };
};

export default createStore;
