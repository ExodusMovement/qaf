import React from 'react';

import { Subscriber } from '../../../src';

import Filter from './Filter';

import Button from '../../App/components/helpers/Button';

const Controls = () => (
  <Subscriber todosStore filterStore>
    {(todosStore, filterStore) => {
      const { todos, clear } = todosStore;
      const { filter, set } = filterStore;

      return (
        <div>
          {['All', 'Ongoing', 'Completed'].map(name => (
            <Filter key={name} {...{ filter, set }}>
              {name}
            </Filter>
          ))}

          <Button disabled={todos.length === 0} onClick={clear}>
            Clear
          </Button>
        </div>
      );
    }}
  </Subscriber>
);

export default Controls;
