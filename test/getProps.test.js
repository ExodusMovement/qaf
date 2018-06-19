// @flow

/* eslint-disable react/prop-types */

import Qaf from '../src';
import getProps from '../src/utils/getProps';

it('gets actions', () => {
  const Foo = class extends Qaf() {
    static staticProp = {};

    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    }

    state = {};

    arrowFunction = () => {};

    regularFunction() {}

    arrowAsyncFunction = async () => {};

    // eslint-disable-next-line no-empty-function
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

    UNSAFE_componentWillMount() {} // eslint-disable-line camelcase
    UNSAFE_componentWillReceiveProps() {} // eslint-disable-line camelcase
    UNSAFE_componentWillUpdate() {} // eslint-disable-line camelcase
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
