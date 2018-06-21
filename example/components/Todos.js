import React from 'react';

import { Subscribe } from '../../src';

import Todo from './Todo';

const Todos = () => (
  <Subscribe todosStore filterStore>
    {(todosStore, filterStore) => {
      const { toggle, remove } = todosStore;
      const { filter } = filterStore;

      const todos = todosStore[filter];
      const { length } = todos;

      let count = filter === 'all' ? '' : ` ${filter}`;
      count += ` todo${length === 0 || length > 1 ? 's' : ''}`;

      return (
        <div>
          {length}
          {count}.
          {todos.map(todo => (
            <Todo key={todo.id} {...{ toggle, remove }} {...todo} />
          ))}
        </div>
      );
    }}
  </Subscribe>
);

export default Todos;
