import React, { PureComponent, createContext } from 'react';

import getComputed from './utils/getComputed';
import getActions from './utils/getActions';

export default () => {
  const { Provider, Consumer } = createContext();

  return class ContextStore extends PureComponent {
    static Consumer = Consumer;

    render() {
      const value = {
        ...getComputed(this),
        ...getActions(this),
        ...this.state
      };

      return <Provider {...this.props} {...{ value }} />;
    }
  };
};
