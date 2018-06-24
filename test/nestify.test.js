import React from 'react';

import { create as r } from 'react-test-renderer';

import { nestify } from '../src/utils';

describe('nestify', () => {
  it('nests components', () => {
    const Foo = props => <div {...props} />;
    const Bar = props => <div {...props} />;
    const Baz = props => <div {...props} />;

    const Nested = ({ children }) => (
      <Foo>
        <Bar>
          <Baz>{children}</Baz>
        </Bar>
      </Foo>
    );

    const Nestified = ({ children }) => nestify([Foo, Bar, Baz], children);

    const nested = r(<Nested>..</Nested>).toJSON();
    const nestified = r(<Nestified>..</Nestified>).toJSON();

    expect(nestified).toEqual(nested);
  });
});
