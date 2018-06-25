import React from 'react';

import { Subscriber } from '../../../src';

const Add = () => (
  <Subscriber todosStore>
    {todosStore => {
      const input = React.createRef();

      const add = () => {
        todosStore.add(input.current.value || '¯\\_(ツ)_/¯');
        input.current.value = '';
      };

      const handleClick = () => add();
      const handleKeyPress = e => e.key === 'Enter' && add();

      return (
        <div>
          <input
            data-shape="long"
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            ref={input}
            type="text"
          />

          <button data-shape="square" onClick={handleClick}>
            +
          </button>
        </div>
      );
    }}
  </Subscriber>
);

export default Add;
