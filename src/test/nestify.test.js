/* eslint-disable react/prop-types */

import React from 'react';

import { create as r } from 'react-test-renderer';

import nestify from '../lib/nestify';

it('nests stuff', () => {
  const Foo = props => <div {...props} />;
  const Bar = props => <div {...props} />;
  const Baz = props => <div {...props} />;

  const Nested = props => (
    <Foo>
      <Bar>
        <Baz>{props.children}</Baz>
      </Bar>
    </Foo>
  );

  const Nestified = props => nestify([Foo, Bar, Baz], props.children);

  const nested = r(<Nested>..</Nested>).toJSON();

  const nestified = r(<Nestified>..</Nestified>).toJSON();

  // console.log(JSON.stringify(nested, null, 2));
  // console.log(JSON.stringify(nestified, null, 2));

  expect(nestified).toEqual(nested);
});
