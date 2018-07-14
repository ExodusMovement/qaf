import React from 'react';

import { create as r } from 'react-test-renderer';

import { createSingularContainer } from '../src';

const { SingularStore, Subscriber, subscribe } = createSingularContainer();

describe('Qaf singular', () => {
  class Store extends SingularStore {
    state = {
      counter: 0,

      inc: () => this.setState(state => ({ counter: state.counter + 1 })),
      dec: () => this.setState(state => ({ counter: state.counter - 1 }))
    };
  }

  const StatelessCounter = (...props) => JSON.stringify(props);

  const WithSubscriber = r(
    <Store>
      <Subscriber>{store => <StatelessCounter {...{ store }} />}</Subscriber>
    </Store>
  );

  const WithSubscriberRender = r(
    <Store>
      <Subscriber render={store => <StatelessCounter {...{ store }} />} />
    </Store>
  );

  const CounterWithSubscribe = subscribe(StatelessCounter);

  const WithSubscribe = r(
    <Store>
      <CounterWithSubscribe />
    </Store>
  );

  let wS = WithSubscriber.toTree();
  let wR = WithSubscriberRender.toTree();
  let ws = WithSubscribe.toTree();

  wS = wS.rendered.rendered.props;
  wR = wR.rendered.rendered.props;
  ws = ws.rendered.rendered.props;

  it('subscribes to stores through subscriber', () => {
    expect(wS.store).toBeDefined();
    expect(wR.store).toBeDefined();
  });

  it('has exposed state through subscriber', () => {
    expect(wS.store.counter).toBe(0);
    expect(wR.store.counter).toBe(0);
  });

  it('has exposed actions through subscriber', () => {
    expect(wS.store.inc).toBeDefined();
    expect(wS.store.dec).toBeDefined();
    expect(wR.store.inc).toBeDefined();
    expect(wR.store.dec).toBeDefined();
  });

  it('subscribes to stores through subscribe', () => {
    expect(ws.store).toBeDefined();
  });

  it('has exposed state through subscribe', () =>
    expect(ws.store.counter).toBe(0));

  it('has exposed actions through subscribe', () => {
    expect(ws.store.inc).toBeDefined();
    expect(ws.store.dec).toBeDefined();
  });
});
