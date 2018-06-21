// @flow

import React from 'react';

import { create as r } from 'react-test-renderer';

import { nestify } from '../src/Provider';

describe('nestify', () => {
  it('nests components', () => {
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

    expect(nestified).toEqual(nested);
  });
});
