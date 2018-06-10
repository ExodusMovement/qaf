import React from 'react';

const { Provider, Consumer } = React.createContext();

export default class ContextStore extends React.PureComponent {
  static Consumer = Consumer;

  render() {
    const actions = Object.keys(this)
      .filter(key => typeof this[key] === 'function')
      .reduce((obj, key) => ({ ...obj, [key]: this[key] }), {});

    const prototype = Object.getPrototypeOf(this);

    const computed = Object.getOwnPropertyNames(prototype)
      .filter(key => {
        const desc = Object.getOwnPropertyDescriptor(prototype, key);
        return desc && typeof desc.get === 'function';
      })
      .reduce((obj, key) => ({ ...obj, [key]: this[key] }), {});

    const value = { ...computed, ...actions, ...this.state };

    return <Provider {...this.props} {...{ value }} />;
  }
}
