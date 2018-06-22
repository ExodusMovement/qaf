// @flow

import React from 'react';

const createStore = () => {
  const StoreContext = React.createContext();

  return class Store extends React.PureComponent {
    static Consumer = StoreContext.Consumer;

    render() {
      return (
        <StoreContext.Provider value={this.state}>
          {this.props.children}
        </StoreContext.Provider>
      );
    }
  };
};

export default createStore;
