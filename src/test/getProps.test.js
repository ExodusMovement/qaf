// @flow

/* eslint-disable react/prop-types */

import Qaf from '../lib';
import getProps from '../lib/utils/getProps';

it('gets actions', () => {
  const Foo = class extends Qaf() {
    static staticProp = {};

    constructor() {
      super();
    }

    state = {};

    arrowFunction = () => {};

    regularFunction() {}

    arrowAsyncFunction = async () => {};

    async regularAsyncFunction() {}

    get computedValue() {
      return {};
    }

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
  };

  const foo = new Foo();

  const props = getProps(foo);

  expect(props.staticProp).not.toBeDefined();
  expect(props.constructor).toBeDefined();
  expect(props.arrowFunction).toBeDefined();
  expect(props.regularFunction).toBeDefined();
  expect(props.arrowAsyncFunction).toBeDefined();
  expect(props.regularAsyncFunction).toBeDefined();
  expect(props.computedValue).toBeDefined();

  expect(props.componentWillMount).toBeDefined();
  expect(props.componentDidMount).toBeDefined();
  expect(props.componentWillReceiveProps).toBeDefined();
  expect(props.componentWillUpdate).toBeDefined();
  expect(props.componentDidUpdate).toBeDefined();
  expect(props.componentWillUnmount).toBeDefined();
  expect(props.componentDidCatch).toBeDefined();

  expect(props.UNSAFE_componentWillMount).toBeDefined();
  expect(props.UNSAFE_componentWillReceiveProps).toBeDefined();
  expect(props.UNSAFE_componentWillUpdate).toBeDefined();

  expect(props.state).not.toBeDefined();
  expect(props.setState).not.toBeDefined();
  expect(props.render).not.toBeDefined();
});
