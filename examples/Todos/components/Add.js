import React from 'react';

import { Subscribe } from '../../../src';

const Add = () => (
  <Subscribe todosStore>
    {todosStore => {
      const input = React.createRef();

      const handleClick = () => {
        todosStore.add(input.current.value || 'Hello World!');
        input.current.value = '';
      };

      return (
        <div>
          <input ref={input} placeholder="What needs to be done?" />{' '}
          <button onClick={handleClick}>Add</button>{' '}
        </div>
      );
    }}
  </Subscribe>
);

export default Add;
