import React from 'react';

import { Subscribe } from '../../../src';

const AddTodo = () => (
  <Subscribe todosStore>
    {todosStore => {
      const input = React.createRef();

      const handleOnClick = () => {
        todosStore.add(input.current.value || 'Hello World!');
        input.current.value = '';
      };

      return (
        <div>
          <input ref={input} placeholder="What needs to be done?" />{' '}
          <button onClick={handleOnClick}>Add</button>{' '}
        </div>
      );
    }}
  </Subscribe>
);

export default AddTodo;
