import React from 'react';

import { Provider } from './context';

import inject from './inject';

export default class ContextStore extends React.PureComponent {
  static inject = inject;

  render() {
    const actions = Object.keys(this)
      .filter(key => typeof this[key] === 'function')
      .reduce((obj, key) => ({ ...obj, [key]: this[key] }), {});

    return <Provider {...this.props} value={{ ...this.state, ...actions }} />;
  }
}
