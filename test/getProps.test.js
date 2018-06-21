// @flow

import { createStore } from '../src';
import { getProps } from '../src/createStore';

describe('getProps', () => {
  class Foo extends createStore() {
    static staticProp = {};

    state = {};

    arrowFunction = () => {};
    arrowAsyncFunction = async () => {};

    regularFunction() {}
    async regularAsyncFunction() {}

    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    componentWillUpdate() {}
    componentDidUpdate() {}
    componentWillUnmount() {}
    componentDidCatch() {}

    UNSAFE_componentWillMount() {}
    UNSAFE_componentWillReceiveProps() {}
    UNSAFE_componentWillUpdate() {}

    get computedValue() {
      return {};
    }

    render() {}
  }

  const foo = new Foo();

  const props = getProps(foo);

  it('passes arrow functions', () => {
    expect(props.arrowFunction).toBeDefined();
    expect(props.arrowAsyncFunction).toBeDefined();
  });

  it('blocks regular functions', () => {
    expect(props.regularFunction).not.toBeDefined();
    expect(props.regularAsyncFunction).not.toBeDefined();
  });

  it('blocks static props', () => expect(props.staticProp).not.toBeDefined());

  it('blocks state', () => expect(props.state).not.toBeDefined());

  it('blocks lifecycle methods', () => {
    expect(props.componentWillMount).not.toBeDefined();
    expect(props.componentDidMount).not.toBeDefined();
    expect(props.componentWillReceiveProps).not.toBeDefined();
    expect(props.componentWillUpdate).not.toBeDefined();
    expect(props.componentDidUpdate).not.toBeDefined();
    expect(props.componentWillUnmount).not.toBeDefined();
    expect(props.componentDidCatch).not.toBeDefined();
  });

  it('blocks deprecated lifecycle methods', () => {
    expect(props.UNSAFE_componentWillMount).not.toBeDefined();
    expect(props.UNSAFE_componentWillReceiveProps).not.toBeDefined();
    expect(props.UNSAFE_componentWillUpdate).not.toBeDefined();
  });

  it('passes computed values', () => expect(props.computedValue).toBeDefined());

  it('blocks render', () => expect(props.render).not.toBeDefined());
});
