// @flow

/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';

import { create as r } from 'react-test-renderer';

import compose from '../src/utils/compose';

describe('compose', () => {
  it('composes components with render props', () => {
    const Foo = props => <Fragment>{props.children({ str: 'foo' })} </Fragment>;
    const Bar = props => <Fragment>{props.children({ str: 'bar' })} </Fragment>;

    const Baz = () => (
      <Foo>
        {foo => (
          <Bar>
            {bar => (
              <Fragment>
                <Fragment>{foo.str}</Fragment>
                <Fragment>{bar.str}</Fragment>
              </Fragment>
            )}
          </Bar>
        )}
      </Foo>
    );

    const tree = r(<Baz />).toJSON();

    expect(tree.includes('foo')).toBe(true);
    expect(tree.includes('bar')).toBe(true);

    const Composed = compose({
      foo: Foo,
      bar: Bar
    });

    const composed = r(
      <Composed
        render={({ foo, bar }) => (
          <Fragment>
            <Fragment>{foo.str}</Fragment>
            <Fragment>{bar.str}</Fragment>
          </Fragment>
        )}
      />
    ).toJSON();

    expect(composed).toEqual(tree);
  });
});
