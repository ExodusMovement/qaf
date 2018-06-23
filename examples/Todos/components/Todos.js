import React from 'react';

import { Subscribe } from '../../../src';

import Todo from './Todo';

const Todos = () => (
  <Subscribe todosStore filterStore>
    {(todosStore, filterStore) => {
      const { toggle, remove } = todosStore;
      const { filter } = filterStore;

      const todos = todosStore[filter]();
      const { length } = todos;

      let count = length;
      count += filter !== 'all' ? ` ${filter}` : '';
      count += ` todo${length === 0 || length > 1 ? 's' : ''}.`;

      return (
        <div>
          <h3>{count}</h3>
          {todos.map(todo => (
            <Todo key={todo.id} {...{ toggle, remove }} {...todo} />
          ))}
        </div>
      );
    }}
  </Subscribe>
);

export default Todos;
