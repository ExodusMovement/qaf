// @flow

import qaf from '../src';
import getProps from '../src/utils/getProps';

describe('getProp', () => {
  const Foo = class extends qaf() {
    static staticProp = {};

    state = {};
    setState = () => {};

    arrowFunction = () => {};
    arrowAsyncFunction = async () => {};

    regularFunction() {}
    async regularAsyncFunction() {} // eslint-disable-line no-empty-function

    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    componentWillUpdate() {}
    componentDidUpdate() {}
    componentWillUnmount() {}
    componentDidCatch() {}

    UNSAFE_componentWillMount() {} // eslint-disable-line camelcase
    UNSAFE_componentWillReceiveProps() {} // eslint-disable-line camelcase
    UNSAFE_componentWillUpdate() {} // eslint-disable-line camelcase

    get computedValue() {
      return {};
    }

    render() {}
  };

  const foo = new Foo();

  const props = getProps(foo);

  it('passes arrow functions', () => {
    expect(props.arrowFunction).toBeDefined();
    expect(props.arrowAsyncFunction).toBeDefined();
  });

  it('passes regular functions', () => {
    expect(props.regularFunction).toBeDefined();
    expect(props.regularAsyncFunction).toBeDefined();
  });

  it('blocks static props', () => expect(props.staticProp).not.toBeDefined());

  it('blocks state', () => {
    expect(props.state).not.toBeDefined();
    expect(props.setState).not.toBeDefined();
  });

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
