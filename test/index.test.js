import React from 'react';

import { create as r } from 'react-test-renderer';

import { createStore, Provider, Subscriber, subscribe } from '../src';

describe('Qaf', () => {
  class Store extends createStore() {
    state = {
      counter: 0,

      inc: () => this.setState(state => ({ counter: state.counter + 1 })),
      dec: () => this.setState(state => ({ counter: state.counter - 1 }))
    };
  }

  class AnotherStore extends createStore() {
    state = { counter: -1 };
  }

  const StatelessCounter = (...props) => JSON.stringify(props);

  const App = props => (
    <Provider store={Store} anotherStore={AnotherStore} {...props} />
  );

  const AppWithSubscriber = r(
    <App>
      <Subscriber store anotherStore>
        {(store, anotherStore) => (
          <StatelessCounter {...{ store, anotherStore }} />
        )}
      </Subscriber>
    </App>
  );

  const AppWithSubscriberRender = r(
    <App>
      <Subscriber
        store
        anotherStore
        render={(store, anotherStore) => (
          <StatelessCounter {...{ store, anotherStore }} />
        )}
      />
    </App>
  );

  const CounterWithSubscribe = subscribe('store', 'anotherStore')(
    StatelessCounter
  );

  const AppWithSubscribe = r(
    <App>
      <CounterWithSubscribe />
    </App>
  );

  let awS = AppWithSubscriber.toTree();
  let awR = AppWithSubscriberRender.toTree();
  let aws = AppWithSubscribe.toTree();

  awS = awS.rendered.rendered.rendered.rendered.rendered.rendered.props;
  awR = awR.rendered.rendered.rendered.rendered.rendered.rendered.props;
  aws = aws.rendered.rendered.rendered.rendered.rendered.rendered.props;

  it('subscribes to stores through subscriber', () => {
    expect(awS.store).toBeDefined();
    expect(awS.anotherStore).toBeDefined();
    expect(awR.store).toBeDefined();
    expect(awR.anotherStore).toBeDefined();
  });

  it('has exposed state through subscriber', () => {
    expect(awS.store.counter).toBe(0);
    expect(awR.store.counter).toBe(0);
  });

  it('has exposed actions through subscriber', () => {
    expect(awS.store.inc).toBeDefined();
    expect(awS.store.dec).toBeDefined();
    expect(awR.store.inc).toBeDefined();
    expect(awR.store.dec).toBeDefined();
  });

  it('subscribes to stores through subscribe', () => {
    expect(aws.store).toBeDefined();
    expect(aws.anotherStore).toBeDefined();
  });

  it('has exposed state through subscribe', () =>
    expect(aws.store.counter).toBe(0));

  it('has exposed actions through subscribe', () => {
    expect(aws.store.inc).toBeDefined();
    expect(aws.store.dec).toBeDefined();
  });

  it("doesn't overlap stores", () => {
    expect(awS.store.counter).not.toBe(-1);
    expect(awR.store.counter).not.toBe(-1);
  });
});
