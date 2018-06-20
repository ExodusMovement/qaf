// @flow

/* eslint-disable react/prop-types */

import React from 'react';

import { create as r } from 'react-test-renderer';

import qaf, { inject, Provider, Subscribe } from '../src';

describe('qaf', () => {
  it('works', () => {
    class Store extends qaf() {
      state = { counter: 0 };

      inc = () => this.setState(state => ({ counter: state.counter + 1 }));
      dec = () => this.setState(state => ({ counter: state.counter - 1 }));
    }

    class AnotherStore extends qaf() {}

    const StatelessCounter = () => null;

    const CounterWithInject = inject('store')(StatelessCounter);

    const App = props => (
      <Provider store={Store} anotherStore={AnotherStore} {...props} />
    );

    const AppWithInject = (
      <App>
        <CounterWithInject />
      </App>
    );

    const AppWithSubscribe = (
      <App>
        <Subscribe store anotherStore>
          {({ store }) => <StatelessCounter {...{ store }} />}
        </Subscribe>
      </App>
    );

    let awi = r(AppWithInject).toTree();
    let aws = r(AppWithSubscribe).toTree();

    awi = awi.rendered.rendered.rendered.rendered.rendered.props;
    aws = aws.rendered.rendered.rendered.rendered.rendered.rendered.props;

    expect(awi.store).toBeDefined();
    expect(awi.store.counter).toBe(0);
    expect(awi.store.inc).toBeDefined();
    expect(awi.store.dec).toBeDefined();

    expect(aws.store).toBeDefined();
    expect(aws.store.counter).toBe(0);
    expect(aws.store.inc).toBeDefined();
    expect(aws.store.dec).toBeDefined();

    // await awi.store.inc();
    // expect(awi.store.counter).toBe(1);
    // await awi.store.dec();
    // expect(awi.store.counter).toBe(0);
  });
});
