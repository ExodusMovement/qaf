import React from 'react';

import { Subscribe } from '../../../src';

const Add = () => (
  <Subscribe todosStore>
    {todosStore => {
      const input = React.createRef();

      const add = () => {
        todosStore.add(input.current.value || 'Hello World!');
        input.current.value = '';
      };

      const handleClick = () => add();
      const handleKeyPress = e => e.key === 'Enter' && add();

      return (
        <div>
          <input
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            ref={input}
            type="text"
          />
          <button onClick={handleClick}>Add</button>
        </div>
      );
    }}
  </Subscribe>
);

export default Add;
