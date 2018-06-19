// @flow

/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';

import { create as r } from 'react-test-renderer';

import compose from '../lib/utils/compose';

it('works', () => {
  const Foo = props => (
    <Fragment>{props.children({ youGot: 'fooed' })} </Fragment>
  );
  const Bar = props => (
    <Fragment>{props.children({ youGot: 'bared' })} </Fragment>
  );

  const Baz = () => (
    <Foo>
      {foo => (
        <Bar>
          {bar => (
            <Fragment>
              <Fragment>{foo.youGot}</Fragment>
              <Fragment>{bar.youGot}</Fragment>
            </Fragment>
          )}
        </Bar>
      )}
    </Foo>
  );

  const tree = r(<Baz />).toJSON();

  expect(tree.includes('fooed')).toBe(true);
  expect(tree.includes('bared')).toBe(true);

  const Composed = compose({
    foo: Foo,
    bar: Bar
  });

  const composed = r(
    <Composed
      render={({ foo, bar }) => (
        <Fragment>
          <Fragment>{foo.youGot}</Fragment>
          <Fragment>{bar.youGot}</Fragment>
        </Fragment>
      )}
    />
  ).toJSON();

  expect(composed).toEqual(tree);
});
