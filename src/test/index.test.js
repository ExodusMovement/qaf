// @flow

/* eslint-disable react/prop-types */

import React from 'react';

import { create as r } from 'react-test-renderer';

import Qaf, { inject, Provider } from '../lib';

it('works', () => {
  class Store extends Qaf() {
    state = { counter: 0 };

    inc = () => this.setState(state => ({ counter: state.counter + 1 }));
    dec = () => this.setState(state => ({ counter: state.counter - 1 }));
  }

  class AnotherStore extends Qaf() {}

  const StatelessCounter = ({ store }) => (
    <div>
      <div>{store.counter}</div>

      <div>
        <button onClick={store.inc}>+</button>{' '}
        <button onClick={store.dec}>-</button>
      </div>
    </div>
  );

  const Counter = inject('store')(StatelessCounter);

  const App = () => (
    <Provider store={Store} anotherStore={AnotherStore}>
      <Counter />
    </Provider>
  );

  const app = r(<App />).toTree();

  expect(app.rendered.props.store).toBeDefined();
  expect(app.rendered.rendered.instance.state.counter).toBeDefined();
  expect(app.rendered.rendered.instance.inc).toBeDefined();
  expect(app.rendered.rendered.instance.dec).toBeDefined();
});
