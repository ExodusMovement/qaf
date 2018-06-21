// @flow

import React from 'react';

import { create as r } from 'react-test-renderer';

import { createStore, Provider, Subscribe, subscribe } from '../src';

describe('qaf', () => {
  class Store extends createStore() {
    state = { counter: 0 };

    inc = () => this.setState(state => ({ counter: state.counter + 1 }));
    dec = () => this.setState(state => ({ counter: state.counter - 1 }));
  }

  class AnotherStore extends createStore() {
    state = { counter: -1 };
  }

  const StatelessCounter = (...props) => JSON.stringify(props);

  const CounterWithInject = subscribe('store', 'anotherStore')(
    StatelessCounter
  );

  const App = props => (
    <Provider store={Store} anotherStore={AnotherStore} {...props} />
  );

  const AppWithInject = r(
    <App>
      <CounterWithInject />
    </App>
  );

  const AppWithSubscribe = r(
    <App>
      <Subscribe store anotherStore>
        {(store, anotherStore) => (
          <StatelessCounter {...{ store, anotherStore }} />
        )}
      </Subscribe>
    </App>
  );

  const AppWithRender = r(
    <App>
      <Subscribe
        store
        anotherStore
        render={(store, anotherStore) => (
          <StatelessCounter {...{ store, anotherStore }} />
        )}
      />
    </App>
  );

  let awi = AppWithInject.toTree();
  let aws = AppWithSubscribe.toTree();
  let awr = AppWithRender.toTree();

  awi = awi.rendered.rendered.rendered.rendered.rendered.rendered.props;
  aws = aws.rendered.rendered.rendered.rendered.rendered.rendered.props;
  awr = awr.rendered.rendered.rendered.rendered.rendered.rendered.props;

  it('has injected stores', () => {
    expect(awi.store).toBeDefined();
    expect(awi.anotherStore).toBeDefined();
  });

  it('has injected state', () => expect(awi.store.counter).toBe(0));

  it('has injected actions', () => {
    expect(awi.store.inc).toBeDefined();
    expect(awi.store.dec).toBeDefined();
  });

  it('subscribed to stores', () => {
    expect(aws.store).toBeDefined();
    expect(aws.anotherStore).toBeDefined();
    expect(awr.store).toBeDefined();
    expect(awr.anotherStore).toBeDefined();
  });

  it('subscription exposes state', () => {
    expect(aws.store.counter).toBe(0);
    expect(awr.store.counter).toBe(0);
  });

  it('subscription exposes actions', () => {
    expect(aws.store.inc).toBeDefined();
    expect(aws.store.dec).toBeDefined();
    expect(awr.store.inc).toBeDefined();
    expect(awr.store.dec).toBeDefined();
  });

  it("doesn't overlap stores", () => {
    expect(aws.store.counter).not.toBe(-1);
    expect(awr.store.counter).not.toBe(-1);
  });
});
