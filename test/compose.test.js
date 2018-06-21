// @flow

import React, { Fragment } from 'react';

import { create as r } from 'react-test-renderer';

import { compose } from '../src/Subscribe';

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

    const Composed = compose(
      Foo,
      Bar
    );

    const composed = r(
      <Composed>
        {(foo, bar) => (
          <Fragment>
            <Fragment>{foo.str}</Fragment>
            <Fragment>{bar.str}</Fragment>
          </Fragment>
        )}
      </Composed>
    ).toJSON();

    expect(composed).toEqual(tree);
  });
});
