// @flow

import React, { PureComponent, createContext } from 'react';

import getProps from './utils/getProps';

export default () => {
  const { Provider, Consumer } = createContext();

  return class Qaf extends PureComponent<{}> {
    static Consumer = Consumer;

    render() {
      const value = {
        ...getProps(this),
        ...this.state
      };

      return <Provider {...this.props} {...{ value }} />;
    }
  };
};
