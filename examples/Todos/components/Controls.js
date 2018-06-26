import React from 'react';

import { Subscriber } from '../../../src';

import Filter from './Filter';

import Btn from '../../App/components/helpers/Btn';

const Controls = () => (
  <Subscriber todosStore filterStore>
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

          <Btn disabled={todos.length === 0} onClick={clear}>
            Clear
          </Btn>
        </div>
      );
    }}
  </Subscriber>
);

export default Controls;
