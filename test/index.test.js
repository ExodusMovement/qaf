// @flow

import React from 'react';

import { create as r } from 'react-test-renderer';

import { createStore, Provider, Subscribe, subscribe } from '../src';

describe('qaf', () => {
  class Store extends createStore() {
    state = { counter: 0 };

    inc = () => this.setState(state => ({ counter: state.counter + 1 }));
    dec = () => this.setState(state => ({ counter: state.counter - 1 }));

    get double() {
      return this.state.counter * 2;
    }
  }

  class AnotherStore extends createStore() {
    state = { counter: -1 };
  }

  const StatelessCounter = (...props) => JSON.stringify(props);

  const App = props => (
    <Provider store={Store} anotherStore={AnotherStore} {...props} />
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

  const CounterWithInject = subscribe('store', 'anotherStore')(
    StatelessCounter
  );

  const AppWithInject = r(
    <App>
      <CounterWithInject />
    </App>
  );

  let aws = AppWithSubscribe.toTree();
  let awr = AppWithRender.toTree();
  let awi = AppWithInject.toTree();

  aws = aws.rendered.rendered.rendered.rendered.rendered.rendered.props;
  awr = awr.rendered.rendered.rendered.rendered.rendered.rendered.props;
  awi = awi.rendered.rendered.rendered.rendered.rendered.rendered.props;

  it('subscribes to stores', () => {
    expect(aws.store).toBeDefined();
    expect(aws.anotherStore).toBeDefined();
    expect(awr.store).toBeDefined();
    expect(awr.anotherStore).toBeDefined();
  });

  it('has exposed state through subscription', () => {
    expect(aws.store.counter).toBe(0);
    expect(awr.store.counter).toBe(0);
  });

  it('has exposed actions through subscription', () => {
    expect(aws.store.inc).toBeDefined();
    expect(aws.store.dec).toBeDefined();
    expect(awr.store.inc).toBeDefined();
    expect(awr.store.dec).toBeDefined();
  });

  it('has exposed computed values through subscription', () => {
    expect(aws.store.double).toBe(0);
    expect(awr.store.double).toBe(0);
  });

  it('has injected stores', () => {
    expect(awi.store).toBeDefined();
    expect(awi.anotherStore).toBeDefined();
  });

  it('has injected state', () => expect(awi.store.counter).toBe(0));

  it('has injected actions', () => {
    expect(awi.store.inc).toBeDefined();
    expect(awi.store.dec).toBeDefined();
  });

  it('has injected computed values', () =>
    expect(awi.store.double).toBeDefined());

  it("doesn't overlap stores", () => {
    expect(aws.store.counter).not.toBe(-1);
    expect(awr.store.counter).not.toBe(-1);
  });
});
