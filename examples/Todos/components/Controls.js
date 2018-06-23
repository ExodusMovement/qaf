import React from 'react';

import { Subscribe } from '../../../src';

import Filter from './Filter';

const Controls = () => (
  <Subscribe todosStore filterStore>
    {(todosStore, filterStore) => {
      const { todos, clear } = todosStore;
      const { filter, set } = filterStore;

      return (
        <div>
          {['All', 'Active', 'Completed'].map(name => (
            <Filter key={name} {...{ filter, set }}>
              {name}
            </Filter>
          ))}

          <button disabled={todos.length === 0} onClick={clear}>
            Clear
          </button>
        </div>
      );
    }}
  </Subscribe>
);

export default Controls;
